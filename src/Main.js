import React, { useState, createRef, useRef } from 'react';

// Extensions
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

// My utilities
import firebase from "./utils/firebase";
import databaseCalls from "./utils/databaseCalls";

// My components
import Category from './components/Category';
import Note from './components/Note';

// MAIN APPLICATION
const Main = () => {

  // * STATE
  // Since this is a relatively simple app, all of the state is stored here.

  // Stores the id of the user.
  const [userId, setUserId] = useState(null);

  // Stores the currently selected category that is highlighted and who's notes are being displayed.
  const [selectedCategory, setSelectedCategory] = useState(-1);
  // Stores the categories associated with the user.
  const [categories, setCategories] = useState(
    [
      {
        id: 0,
        name: 'Personal',
        color: 'green',
        editMode: false,
        selected: false
      }
    ]
  );
  React.useEffect(() => {
    // Filter the displayed notes to only those within the selected Category.
    // If the selected note is not "all"...
    if (selectedCategory !== -1) {
      // Filter logic
    }

    // Submit the change to Firebase.
  }, [categories]);

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
  // Stores the ref to the all category which is not a true category and cannot be deleted.
  const categoryAllRef = useRef(null);

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
      databaseCalls.loadUser(userId.userId);
      // Save the user in the state.
      setUserId(userId.userId);
    } else {
      // If user does not exist, then make a call to create the user on Firebase.
      databaseCalls.createUser().then((newUserId) => {
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

  // ** UTILS
  // Generates a new id number based on the last value found in the array plus one.
  const generateId = (arrayOfObjects) => {
    if (arrayOfObjects.length > 0) {
      return parseInt(arrayOfObjects[arrayOfObjects.length - 1].id) + 1;
    } else {
      return 0;
    }
  }
  // Finds the object with the given id within the array.
  const findObjectInArray = (id, arrayOfObjects) => {
    return arrayOfObjects.find(object => object.id === id);
  }
  // Finds the position of the object with the given id within the array.
  const findPositionInArray = (id, arrayOfObjects) => {
    return arrayOfObjects.map(function(object) {return object.id; }).indexOf(id);
  }

  // ** CATEGORIES

  // Create a new empty category (a bucket for notes).
  const createEmptyCategory = () => {
    let newId = generateId(categories);
    let emptyCategory = {
      id: newId,
      name: '',
      color: '',
      editMode: true,
      selected: false
    };
    setCategories(categories  => [...categories, emptyCategory]);
    return newId;
  }
  // Trigger the process to add a new category.
  const addCategory = () => {
    const categoryId = createEmptyCategory();
  }

  // Change category to the details provided in the input object.
  // Expect input object to look like { key: newValue, ... }
  const changeCategory = (id, newProperties) => {
    console.log(id, newProperties)
    // Find the object with the relevant id.
    let originalCategory = findObjectInArray(id, categories);
    // Replace any values within it with the submitted properties.
    let newCategory = Object.assign(originalCategory, newProperties);

    // Construct a new array to replace the state.
    let newCategories = [...categories];
    let categoryPosition = findPositionInArray(id, categories);
    newCategories[categoryPosition] = newCategory;
    setCategories(newCategories);
  }

  const editCategoryTitleClick = (e) => {
    e.preventDefault();
    // Set the target category into edit mode, unless it is the all category.
    if (selectedCategory !== -1) {
      changeCategory(selectedCategory, { editMode: true });
    }
  }

  const editCategoryColor = (id) => {
    let newColor = "blue";
    changeCategory(id, { color: newColor });
  }

  const selectCategory = (id) => {
    // Find the old selected category and make its selected property false.
    if (selectedCategory !== -1) {
      changeCategory(selectedCategory, { selected: false });
    }

    // Set the id of the selected category.
    setSelectedCategory(id);

    if (id === -1) {
      // If we are selecting the all category, which is not a true category...
      // Don't change any categories. Instead, use the all ref to set selected on the all link. TODO
    } else {
      // If we are selecting a normal category...
      // Find the object and set its selected to true.
      changeCategory(id, { selected: true });
    }
  }

  const deleteCategory = (id) => {
    // Create new categories array with the object removed.
    let newCategories = [...categories];
    let categoryPosition = findPositionInArray(id, categories);
    newCategories.splice(categoryPosition, 1);
    setCategories(newCategories);

    // Reset selected category to "all".
    setSelectedCategory(-1);
  }

  const deleteCategoryClick = (e) => {
    e.preventDefault();
    // Delete the currently selected category, unless it is the all category.
    if (selectedCategory !== -1) {
      deleteCategory(selectedCategory);
    }
  }

  const allCategoryClick = (e) => {
    e.preventDefault();
    selectCategory(-1);
  }

  // RENDER

  // Append a selected class to all if all is selected.
  let selectedClassAll;
  if (selectedCategory === -1) {
    selectedClassAll = " selected";
  } else {
    selectedClassAll = "";
  }

  // Main app view.
  return (
    <div className="app-container">
      <div className="main-column">
        <div className="main-logo">
          <div className="box-logo"></div>
          <h1>Notebot</h1>
        </div>
        <div className="main-desc">
          <p>A demo for a simple React-based local storage note taking application. Not intended for serious use.</p>
          <p>Created by @prokhorvlg (Valentin Sigalov).</p>
        </div>
        <div className="main-search">
          <h2>Search</h2>
          <input />
        </div>
        <div className="main-categories">
          <div className="main-categories-bar">
            <h2>Categories</h2>
            <a href="#" onClick={addCategory}>Create category</a>
            <a href="#" onClick={editCategoryTitleClick}>Edit title</a>
            <a href="#" onClick={editCategoryColor}>Edit color</a>
            <a href="#" onClick={deleteCategoryClick}>Delete category</a>
          </div>
          <ul>
            <li>
              <a
                id="category-all"
                ref={categoryAllRef}
                href="#"
                class={selectedClassAll}
                onClick={allCategoryClick}>
                  All
              </a>
            </li>
            {categories.map((category, i) => (<Category
                category={category}
                changeCategory={changeCategory}
                deleteCategory = {deleteCategory}
                selectCategory = {selectCategory}
              />)
            )}
          </ul>
        </div>
        <div className="links-box">
          <p>Visit my site at x!</p>
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
