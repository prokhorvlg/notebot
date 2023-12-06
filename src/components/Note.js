import React, { useRef, useEffect } from 'react';
import TimeAgo from 'react-timeago'
import { findObjectInArray } from "../utils/Utils";
import firebase from "../utils/firebase";

const Note = ({ note, changeNote, deleteNote, selectNote, selectedNote, categories, setActiveScreen }) => {

  // Make sure that the input element is focused when the note is in edit mode.
  const noteRef = useRef(null);
  useEffect(() => {
    if (note.editMode) {
      noteRef.current.focus();
    }
  }, [note.editMode]);

  // Update the "last modified" time to now any time the contents of the notes change.
  useEffect(() => {
    if (selectedNote && selectedNote === note.id) {
      changeNote(note.id, { modified: new Date().toLocaleString() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note.title]);

  // Handle any events that occur in edit mode.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  }
  const handleExit = (e) => {
    // If the input is empty, delete the Category.
    if (e.target.value === "") {
      deleteNote(note.id);
    } else {
      // If input is not empty, update the Category state.
      changeNote(note.id, { title: e.target.value, editMode: false });
      // Select the newly edited category.
      selectNote(note.id);
    }
  }
  const handleEdit = (e) => {
    changeNote(note.id, { title: e.target.value });
  }

  // Handle any events that occur in normal mode (as an anchor).
  const handleClick = (e) => {
    selectNote(note.id);
    setActiveScreen(2);
  }

  // Make sure to convert any Timestamp objects from Firebase
  let thisNoteDate = note.modified;
  if (note.modified instanceof firebase.firestore.Timestamp) {
    thisNoteDate = note.modified.toDate();
  }

  if (note.editMode) {
    return (
      <li className={"category-item edit-mode " + ((selectedNote === note.id) ? 'selected' : '')}>
        <input
          id={"note-" + note.id}
          ref={noteRef}
          placeholder="Enter a note title."
          className="feature-input"
          onInput={(e) => handleEdit(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(e) => handleExit(e)}
          value={note.title}
          style={{ borderColor: note.color }}
          />
      </li>
    );
  } else if (note.visible) {
    return (
      <li className={"note-title link-mode " + ((selectedNote === note.id) ? 'selected' : '')}>
        <button onClick={(e) => handleClick(e)}>
          <div className="note-title-color" style={{ backgroundColor: findObjectInArray(note.category, categories).color }}></div>
          <div className="note-title-box">
            <h2>{note.title}</h2>
            <p>
              <TimeAgo
                  date={thisNoteDate}
                  formatter={(value: number, unit: TimeAgo.Unit, suffix: TimeAgo.Suffix) => {
                    if (unit === 'second') return 'just now';
                    const plural: string = value !== 1 ? 's' : '';
                    return `${value} ${unit}${plural} ${suffix}`;
                  }}
                />
            </p>
          </div>
        </button>
      </li>
    );
  } else {
    return null;
  }
}

export default Note;
