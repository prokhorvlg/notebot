import React from 'react';

// Components
import Note from './Note';

const NotesList = ({ notes, changeNote, deleteNote, selectNote, selectedNote, categories }) => {

  return (
    [].concat(notes)
      .sort((a, b) => { return new Date(b.modified) - new Date(a.modified) })
      .map((note, i) =>
        <Note
          note={note}
          changeNote={changeNote}
          deleteNote={deleteNote}
          selectNote={selectNote}
          selectedNote={selectedNote}
          categories={categories}
        />)
  );

};

export default NotesList;
