import React, { useState, useEffect } from 'react';

// Utilities
import { generateId, generateColor, findObjectInArray, findPositionInArray } from "../utils/Utils";

// ** NOTES
const useNotes = (initialNotes, categories, selectedCategory) => {
  // Stores the currently selected note that is being edited in the main panel.
  const [selectedNote, setSelectedNote] = useState(null);

  // Stores the notes associated with the user.
  const [notes, setNotes] = useState(initialNotes);

  // Trigger the process to add a new note.
  const addNote = () => {
    const noteId = createEmptyNote();
  }

  // Create a new empty category (a bucket for notes).
  const createEmptyNote = () => {
    const newId = generateId(notes);
    const assignedCategory = (selectedCategory !== -1 ? selectedCategory : categories[0].id);
    const emptyNote = {
      id: newId,
      title: '',
      category: assignedCategory,
      modified: new Date().toLocaleString(),
      contents: '',
      selected: false,
      editMode: true,
      visible: true
    }
    setNotes(notes  => [...notes, emptyNote]);
    return newId;
  }

  // Change note to the details provided in the input object.
  // Expect input object to look like { key: newValue, ... }
  const changeNote = (id, newProperties) => {
    // Find the object with the relevant id.
    const originalNote = findObjectInArray(id, notes);
    // Replace any values within it with the submitted properties.
    const newNote = Object.assign(originalNote, newProperties);

    // Construct a new array to replace the state.
    const newNotes = [...notes];
    const notePosition = findPositionInArray(id, notes);
    newNotes[notePosition] = newNote;
    setNotes(newNotes);
  }

  // Causes the note with the given id to be set to selected within the state.
  const selectNote = (id) => {
    setSelectedNote(id);
  }

  // Deletes a note based on id.
  const deleteNote = (id) => {
    // Create new notes array with the object removed.
    let newNotes = [...notes];
    const notePosition = findPositionInArray(id, notes);
    newNotes.splice(notePosition, 1);
    setNotes(newNotes);

    // Reset selected note to "all".
    setSelectedNote(null);
  }

  return [
      selectedNote,
      setSelectedNote,
      notes,
      addNote,
      changeNote,
      selectNote,
      deleteNote
    ];
}

export default useNotes;
