import React from 'react';
import { findObjectInArray } from "../utils/Utils";
// - Tiny MCE for WISYWIG
import { Editor } from '@tinymce/tinymce-react';

const NoteEditor = ({ selectedNote, notes, changeNote }) => {
  const noteContents = findObjectInArray(selectedNote, notes).contents

  if (selectedNote !== null) {
    return (
      <Editor
        value={noteContents}
        apiKey="nacx0iqah4xpy7tb8prkc3hy42bdva4exnbaurkyumhwg0f2"
        init={{
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help',
          forced_root_block_attrs: {
            'class': 'editor-font',
            'style': 'font-family: Inter;'
          }
        }}

        onEditorChange={(newValue, editor) => {
          const hasChanged = noteContents !== newValue
          if (hasChanged) {
            changeNote(selectedNote, { contents: newValue, modified: new Date().toLocaleString() });
          }
        }}
      />
    );
  } else {
    return null;
  }

};

export default NoteEditor;
