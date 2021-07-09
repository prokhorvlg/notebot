import React, { useState } from 'react';

// Addons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faArrowLeft, faTrashAlt, faExchangeAlt, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons'
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

import notebotLogo from "./images/notebot-logo-nobg.png"

// MAIN APPLICATION
const Main = () => {

  // * STATE

  // Stores whether or not the web app has completed its initial load.
  const [appFinishedLoading, setAppFinishedLoading] = useState(false);

  // ** STORAGE: Custom hook that handles User and Cloud Storage related functionality.
  const [
    userId,
    initUser,
    saveCollectionToCloud,
    deleteItemFromCloud,
    getCollectionFromCloud,
    saveStatesToCloud,
    getStatesFromCloud
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
    setSelectedCategory,
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
    setSelectedNote,
    notes,
    setNotes,
    addNote,
    changeNote,
    selectNote,
    deleteNote
  ] = useNotes(categories, selectedCategory, saveCollectionToCloud, deleteItemFromCloud);

  // ** SEARCH
  const [searchString, setSearchString] = useState("");
  const handleSearchInput = (e) => {
    setSearchString(e.target.value);
  }
  React.useEffect(() => {
    if (appFinishedLoading) {
      // Filter the selection down.
      notes.forEach((note) => {
        // Make sure note is in selected category (or all are visible).
        const noteIsInSelectedCategory = (note.category === selectedCategory || selectedCategory === -1);
        const noteContainsSearchString = (note.title.toLowerCase().includes(searchString.toLowerCase()) || note.contents.toLowerCase().includes(searchString.toLowerCase()) || searchString === "");
        if (noteIsInSelectedCategory && noteContainsSearchString) {
          changeNote(note.id, { visible: true });
        } else {
          changeNote(note.id, { visible: false });
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, searchString, selectedCategory]);

  // ** MOBILE VIEWS
  const [activeScreen, setActiveScreen] = useState(0);

  // ** LOAD APP DATA FROM CLOUD
  React.useEffect(() => {
    async function loadApp() {
      initUser() // Load the user data or creates a new one if they do not exist on load.
        // Load data.
        .then(async ([newUserId, userIsExisting]) => {
          if (userIsExisting) {
            setCategories(await getCollectionFromCloud(newUserId, "categories"));
            setNotes(await getCollectionFromCloud(newUserId, "notes"));
            const [newSearchString, newSelectedCategory, newSelectedNote, newActiveScreen] = await getStatesFromCloud(newUserId, ['searchString', 'selectedCategory', 'selectedNote', 'activeScreen']);
            (newSearchString) ? setSearchString(newSearchString) : setSearchString("");
            (newSelectedCategory || newSelectedCategory === 0) ? setSelectedCategory(newSelectedCategory) : setSelectedCategory(-1);
            (newSelectedNote || newSelectedCategory === 0) ? setSelectedNote(newSelectedNote) : setSelectedNote(null);
            (newActiveScreen) ? setActiveScreen(newActiveScreen) : setActiveScreen(0);
            console.log(newSearchString, newSelectedCategory, newSelectedNote, newActiveScreen);
          } else {
            setCategories(CategoriesInitialData);
            setNotes(NotesInitialData);
          }
        })
        // Set the app finished loading state to true as loading is complete.
        .then(() => {
          setAppFinishedLoading(true);
        })
    }
    loadApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // * LOAD APP STATE TO CLOUD
  React.useEffect(() => {
    if (appFinishedLoading) {
      saveStatesToCloud([
        {
          key: 'searchString',
          value: searchString
        },
        {
          key: 'selectedCategory',
          value: selectedCategory
        },
        {
          key: 'selectedNote',
          value: selectedNote
        },
        {
          key: 'activeScreen',
          value: activeScreen
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString, selectedCategory, selectedNote, activeScreen]);

  const noteColor = (selectedNote !== null) ? findObjectInArray(findObjectInArray(selectedNote, notes).category, categories).color : "white";
  const categoryColor = (selectedCategory !== null && selectedCategory !== -1) ? findObjectInArray(selectedCategory, categories).color : "white";

  // * RENDER
  return (
    <div className="app-container">
      <div className={"loading-screen " + ((!appFinishedLoading) ? "showLoadingScreen" : "hideLoadingScreen")}>
        <div className="main-logo">
          <div className="box-logo"><img src={notebotLogo} alt="notebotLogo" /></div>
          <h1>loading...</h1>
        </div>
      </div>
      { appFinishedLoading &&
        <>
          <div className={"categories-list-column " + ((activeScreen === 0) ? 'selected' : '')}>
            <div className="main-logo">
              <div className="box-logo"><img src={notebotLogo} alt="notebotLogo" /></div>
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
                <button onClick={addCategory} className="feature-link">
                  <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
                  <span>Add category</span>
                </button>
              </div>
            </div>
          </div>
          <div className={"notes-list-column " + ((activeScreen === 1) ? 'selected' : '')}>
            <div className="list-search-box">
              <button className="feature-return" onClick={() => { setActiveScreen(0); }} style={{ borderColor: categoryColor, color: categoryColor }}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div className="list-search-container">
                <h2>Search your notes</h2>
                <div className="list-search-input-container">
                  <input
                    className="feature-input"
                    onInput={(e) => handleSearchInput(e)}
                    style={{ borderColor: categoryColor }}
                    />
                  <div className="list-search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
              </div>
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
              <button onClick={addNote} className="feature-link">
                <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
                <span>Add note</span>
              </button>
            </div>
          </div>
          <div className={"note-input-column " + ((activeScreen === 2) ? 'selected' : '')}>
            <div className="note-title-bar">
              <button className="feature-return" onClick={() => { setActiveScreen(1); }} style={{ borderColor: noteColor, color: noteColor }}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div className="note-title-bar-container">
                <div className="note-title-icon" style={{ backgroundColor: noteColor }}></div>
                <div className="note-title-text">
                  <h3>{(selectedNote !== null) ? findObjectInArray(selectedNote, notes).title : "Select a note"}</h3>
                  {(selectedNote !== null) ?
                    <p> edited <TimeAgo
                        date={findObjectInArray(selectedNote, notes).modified}
                        formatter={(value: number, unit: TimeAgo.Unit, suffix: TimeAgo.Suffix) => {
                          if (unit === 'second') return 'just now';
                          const plural: string = value !== 1 ? 's' : '';
                          return `${value} ${unit}${plural} ${suffix}`;
                        }}
                      /><span className="mobile-hidden">, on {findObjectInArray(selectedNote, notes).modified.toString()}</span></p>
                  :
                    <p>No note selected.</p>
                  }
                </div>
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
              <button className="feature-link" onClick={(e) => { changeNote(selectedNote, { editMode: true }); setActiveScreen(1); }}>
                <FontAwesomeIcon icon={faEdit} className="fa-link-icon" />
                <span>Change title</span>
              </button>
              <button className="feature-link" onClick={(e) => { deleteNote(selectedNote); setActiveScreen(1); }}>
                <FontAwesomeIcon icon={faTrashAlt} className="fa-link-icon" />
                <span>Delete note</span>
              </button>
              <button className="feature-link" onClick={(e) => { if (selectedNote !== null) { setCategorySetMode(true); setActiveScreen(0); }}}>
                <FontAwesomeIcon icon={faExchangeAlt} className="fa-link-icon" />
                <span>Change category</span>
              </button>
            </div>
          </div>
        </>
      }
    </div>
  );

};

export default Main;