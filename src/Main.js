import React, { useState, createRef, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

// Utilities
import { generateId, generateColor, findObjectInArray, findPositionInArray } from "./utils/Utils";
import DatabaseCalls from "./utils/DatabaseCalls";

// Components
import CategoryAll from './components/CategoryAll';
import CategoriesList from './components/CategoriesList';
import CategoryEditControls from './components/CategoryEditControls';
import Note from './components/Note';

// Initial Data
import CategoriesInitialData from './data/CategoriesInitialData';

// Functionality
import useCategories from  './functionality/CategoriesFunctionality.js';

// MAIN APPLICATION
const Main = () => {

  // * STATE
  // Since this is a relatively simple app, all of the state is stored here.

  // Stores the id of the user.
  const [userId, setUserId] = useState(null);

  // All Categories related functionality is stored in a custom hook.
  const [
    selectedCategory,
    setSelectedCategory,
    categories,
    selectedCategoryColor,
    addCategory,
    changeCategory,
    selectCategory,
    deleteCategory
  ] = useCategories(CategoriesInitialData);

  // Stores the currently selected note that is being edited in the main panel.
  const [selectedNote, setSelectedNote] = useState(null);
  // Stores the notes associated with the user.
  const [notes, setNotes] = useState(
    [
      {
        id: 0,
        title: 'Title of a note',
        category: 0,
        created: 'Date',
        modified: 'Date',
        contents: 'Contents of a note.'
      },
    ]
  );


  const [searchString, setSearchString] = useState("");
  React.useEffect(() => {
    // Filter the
  }, [searchString]);

  // * EFFECTS

  // Initializion for the app.
  // This loads the user data or creates a new one if they do not exist.
  React.useEffect(() => {
    // Try to retrieve the user from localStorage, if it exists.
    let userId = retrieveLocalUser();
    if (userId && Object.keys(userId).length !== 0) {
      // If user exists, then make a call to get the user's notes.
      DatabaseCalls.loadUser(userId.userId);
      // Save the user in the state.
      setUserId(userId.userId);
    } else {
      // If user does not exist, then make a call to create the user on Firebase.
      DatabaseCalls.createUser().then((newUserId) => {
        // Save the new user in the state.
        setUserId(newUserId);
        // Save the user Id in localStorage.
        storeLocalUser();
      });
    }
  }, []);

  React.useEffect(() => {
    console.log(categories);
  });

  // * FUNCTIONS

  // ** LOCAL STORAGE
  // Store and retrieve the user id from local storage, if the user refreshes the page.
  const storeLocalUser = () => {
    const notebotUserStore = userId;
    localStorage.setItem('notebotUserStore', JSON.stringify(notebotUserStore));
  }
  const retrieveLocalUser = () => {
    const notebotUserStore = JSON.parse(localStorage.getItem('notebotUserStore'));
    return notebotUserStore;
  }

  // RENDER

  // Main app view.
  return (
    <div className="app-container">
      <div className="main-column">
        <div className="main-logo">
          <div className="box-logo"></div>
          <h1>Notebot</h1>
        </div>
        <div className="main-categories">

          <ul className="main-categories-list">
            <CategoryAll
              selectCategory={selectCategory}
              selectedCategory={selectedCategory}
              />
            <CategoriesList
              categories={categories}
              changeCategory={changeCategory}
              deleteCategory={deleteCategory}
              selectCategory={selectCategory}
              />
          </ul>

          <CategoryEditControls
            selectedCategory={selectedCategory}
            selectedCategoryColor={selectedCategoryColor}
            changeCategory={changeCategory}
            deleteCategory={deleteCategory}
            />

          <div className="main-categories-add">
            <a href="#" onClick={addCategory}>
              <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
              Add category
            </a>
          </div>

        </div>
      </div>
      <div className="list-column">
        <ul>
        </ul>
        <div className="note-controls">
        </div>
      </div>
      <div className="note-column">
        <div className="note-title-bar"></div>
        <div className="note-contents"></div>
      </div>
    </div>
  );
};

export default Main;
