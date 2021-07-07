import React, { useState } from 'react';

// Addons
// - Font Awesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import TimeAgo from 'react-timeago'

// Utilities
import { findObjectInArray } from "./utils/Utils";

// Components
import CategoryAll from './components/CategoryAll';
import CategoriesList from './components/CategoriesList';
import CategoryColorPicker from './components/CategoryColorPicker';
import CategoryEditControls from './components/CategoryEditControls';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';

// Initial Data
import CategoriesInitialData from './data/CategoriesInitialData';
import NotesInitialData from './data/NotesInitialData';

// Functionality
import useCategories from  './functionality/CategoriesFunctionality';
import useNotes from  './functionality/NotesFunctionality';
import useStorage from "./functionality/StorageFunctionality";

// MAIN APPLICATION
const Main = () => {

  // * STATE

  // ** STORAGE: Custom hook that handles User and Cloud Storage related functionality.
  const [
    userId,
    initUser,
    saveCollectionToCloud,
    deleteItemFromCloud,
    getCollectionFromCloud
  ] = useStorage();

  // ** DELETE CATEGORY NOTES: Deletes all notes within a given category.
  const deleteCategoryNotes = (categoryId) => {
    notes.forEach((note) => {
      if (note.category === categoryId) {
        deleteNote(note.id);
      }
    });
  }

  // ** CATEGORIES: Custom hook for Categories-related functionality.
  const [
    selectedCategory,
    categories,
    setCategories,
    selectedCategoryColor,
    setSelectedCategoryColor,
    addCategory,
    changeCategory,
    selectCategory,
    deleteCategory
  ] = useCategories(deleteCategoryNotes, saveCollectionToCloud, deleteItemFromCloud);
  const [categorySetMode, setCategorySetMode] = useState(false);

  // ** CATEGORY COLOR PICKER
  const [editColorMode, setEditColorMode] = useState(false);

  // ** NOTES: Custom hook for Notes-related functionality.
  const [
    selectedNote,
    notes,
    setNotes,
    addNote,
    changeNote,
    selectNote,
    deleteNote
  ] = useNotes(categories, selectedCategory, saveCollectionToCloud, deleteItemFromCloud);

  // ** LOAD APP DATA FROM CLOUD
  React.useEffect(() => {
    async function loadApp() {
      console.log("totally only running once lol")
      initUser() // Load the user data or creates a new one if they do not exist on load.
        .then(([newUserId, userIsExisting]) => {
          console.log(userIsExisting)
          if (userIsExisting) {
            // Load the user's categories into the state.
            console.log("grabbing collection!");
            getCollectionFromCloud(newUserId, "categories", setCategories);
          } else {
            // Load initial data.
            setCategories(CategoriesInitialData);
          }
          return [newUserId, userIsExisting];
        })
        .then(([newUserId, userIsExisting]) => {
          if (userIsExisting) {
            // Load the user's notes into the state.
            getCollectionFromCloud(newUserId, "notes", setNotes);
          } else {
            // Load initial data.
            setNotes(NotesInitialData);
          }
        })
    }
    loadApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ** SEARCH
  const [searchString, setSearchString] = useState("");
  const handleSearchInput = (e) => {
    setSearchString(e.target.value);
  }
  React.useEffect(() => {
    // Filter the selection down.
    notes.forEach((note) => {
      // Make sure note is in selected category (or all are visible).
      const noteIsInSelectedCategory = (note.category === selectedCategory || selectedCategory === -1);
      const noteContainsSearchString = (note.title.toLowerCase().includes(searchString) || note.contents.toLowerCase().includes(searchString) || searchString === "");
      if (noteIsInSelectedCategory && noteContainsSearchString) {
        changeNote(note.id, { visible: true });
      } else {
        changeNote(note.id, { visible: false });
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, searchString, selectedCategory]);

  // ** MOBILE VIEWS
  const [activeScreen, setActiveScreen] = useState(0);

  // * RENDER
  return (
    <div className="app-container">
      <div className={"categories-list-column " + ((activeScreen === 0) ? 'selected' : '')}>
        <div className="main-logo">
          <div className="box-logo"></div>
          <h1>Notebot</h1>
        </div>
        <div className="main-categories">
          <ul className="main-categories-list">
            <CategoryAll
              selectCategory={selectCategory}
              selectedCategory={selectedCategory}
              setActiveScreen={setActiveScreen}
              />
            <CategoriesList
              categories={categories}
              changeCategory={changeCategory}
              deleteCategory={deleteCategory}
              selectCategory={selectCategory}
              selectedCategory={selectedCategory}
              changeNote={changeNote}
              selectedNote={selectedNote}
              categorySetMode={categorySetMode}
              setCategorySetMode={setCategorySetMode}
              setActiveScreen={setActiveScreen}
              />
          </ul>
          <CategoryColorPicker
            editColorMode={editColorMode}
            setEditColorMode={setEditColorMode}
            selectedCategory={selectedCategory}
            selectedCategoryColor={selectedCategoryColor}
            setSelectedCategoryColor={setSelectedCategoryColor}
            changeCategory={changeCategory}
            />

          <CategoryEditControls
            selectedCategory={selectedCategory}
            selectedCategoryColor={selectedCategoryColor}
            changeCategory={changeCategory}
            deleteCategory={deleteCategory}
            editColorMode={editColorMode}
            setEditColorMode={setEditColorMode}
            />

          <div className="main-categories-add">
            <a href="#" onClick={addCategory} className="feature-link">
              <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
              Add category
            </a>
          </div>

        </div>
      </div>
      <div className={"notes-list-column " + ((activeScreen === 1) ? 'selected' : '')}>
        <button onClick={() => { setActiveScreen(0); }}>Back to Categories</button>
        <div className="list-search-box">
          <h2>Search your notes</h2>
          <input
            className="feature-input"
            onInput={(e) => handleSearchInput(e)}
            />
        </div>
        <ul>
          <NotesList
            notes={notes}
            changeNote={changeNote}
            deleteNote={deleteNote}
            selectNote={selectNote}
            selectedNote={selectedNote}
            categories={categories}
            setActiveScreen={setActiveScreen}
            />
        </ul>
        <div className="list-notes-add">
          <a href="#" onClick={addNote} className="feature-link">
            <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
            Add note
          </a>
        </div>
      </div>
      <div className={"note-input-column " + ((activeScreen === 2) ? 'selected' : '')}>
        <div className="note-title-bar">
          <div className="note-title-icon" style={{ backgroundColor: (selectedNote !== null) ? findObjectInArray(findObjectInArray(selectedNote, notes).category, categories).color : "white" }}></div>
          <button onClick={() => { setActiveScreen(1); }}>Back to Notes</button>
          <div className="note-title-container">
            <h3>{(selectedNote !== null) ? findObjectInArray(selectedNote, notes).title : "Select a note"}</h3>
            {(selectedNote !== null) ?
              <p> edited <TimeAgo
                  date={findObjectInArray(selectedNote, notes).modified}
                  formatter={(value: number, unit: TimeAgo.Unit, suffix: TimeAgo.Suffix) => {
                    if (unit === 'second') return 'just now';
                    const plural: string = value !== 1 ? 's' : '';
                    return `${value} ${unit}${plural} ${suffix}`;
                  }}
                />, on {findObjectInArray(selectedNote, notes).modified.toString()}</p>
            :
              <p>No note selected.</p>
            }
          </div>
        </div>
        <div className="note-contents">
          <NoteEditor
            selectedNote={selectedNote}
            notes={notes}
            changeNote={changeNote}
            />
        </div>
        <div className="note-controls">
          <a href="#" className="feature-link" onClick={(e) => changeNote(selectedNote, { editMode: true })}>
            <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
            Change title
          </a>
          <a href="#" className="feature-link" onClick={(e) => deleteNote(selectedNote)}>
            <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
            Delete note
          </a>
          <a href="#" className="feature-link" onClick={(e) => { if (selectedNote !== null) setCategorySetMode(true) }}>
            <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
            Change category
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
