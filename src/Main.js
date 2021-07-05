import React, { useEffect, useMemo, useState, createRef, useRef } from 'react';

// Addons
// - Font Awesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import TimeAgo from 'react-timeago'

// Utilities
import { generateId, generateColor, findObjectInArray, findPositionInArray } from "./utils/Utils";
import DatabaseCalls from "./utils/DatabaseCalls";

// Components
import CategoryAll from './components/CategoryAll';
import CategoriesList from './components/CategoriesList';
import CategoryColorPicker from './components/CategoryColorPicker';
import CategoryEditControls from './components/CategoryEditControls';
import NotesList from './components/NotesList';
import Note from './components/Note';
import NoteEditor from './components/NoteEditor';

// Initial Data
import CategoriesInitialData from './data/CategoriesInitialData';
import NotesInitialData from './data/NotesInitialData';

// Functionality
import useUser from  './functionality/UserFunctionality.js';
import useCategories from  './functionality/CategoriesFunctionality.js';
import useNotes from  './functionality/NotesFunctionality.js';

// MAIN APPLICATION
const Main = () => {

  // * STATE
  // ** USER: Custom hook for User-related functionality.
  const [initUser] = useUser();
  React.useEffect(() => {
    // Load the user data or creates a new one if they do not exist on load.
    initUser();
  }, []);

  // ** CATEGORIES: Custom hook for Categories-related functionality.
  const [
    selectedCategory,
    setSelectedCategory,
    categories,
    selectedCategoryColor,
    setSelectedCategoryColor,
    addCategory,
    changeCategory,
    selectCategory,
    deleteCategory
  ] = useCategories(CategoriesInitialData);

  const [categorySetMode, setCategorySetMode] = useState(false);

  // ** CATEGORY COLOR PICKER
  const [editColorMode, setEditColorMode] = useState(false);

  // ** NOTES: Custom hook for Notes-related functionality.
  const [
    selectedNote,
    setSelectedNote,
    notes,
    addNote,
    changeNote,
    selectNote,
    deleteNote
  ] = useNotes(NotesInitialData, categories, selectedCategory);

  // ** SEARCH
  const [searchString, setSearchString] = useState("");

  const handleSearchInput = (e) => {
    setSearchString(e.target.value);
  }

  React.useEffect(() => {

    // Filter the selection down.
    notes.map((note) => {
      // Make sure note is in selected category (or all are visible).
      const noteIsInSelectedCategory = (note.category === selectedCategory || selectedCategory === -1);
      const noteContainsSearchString = (note.title.toLowerCase().includes(searchString) || note.contents.toLowerCase().includes(searchString) || searchString === "");
      if (noteIsInSelectedCategory && noteContainsSearchString) {
        changeNote(note.id, { visible: true });
      } else {
        changeNote(note.id, { visible: false });
      }
    })

  }, [searchString, selectedCategory]);

  // * RENDER
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
              changeNote={changeNote}
              selectedNote={selectedNote}
              categorySetMode={categorySetMode}
              setCategorySetMode={setCategorySetMode}
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
      <div className="list-column">
        <div className="list-search-box"><h2>Search your notes</h2>
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
            />
        </ul>
        <div className="list-notes-add">
          <a href="#" onClick={addNote} className="feature-link">
            <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
            Add note
          </a>
        </div>
      </div>
      <div className="note-column">
        <div className="note-title-bar">
          <div className="note-title-icon" style={{ backgroundColor: (selectedNote !== null) ? findObjectInArray(findObjectInArray(selectedNote, notes).category, categories).color : "white" }}></div>
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
