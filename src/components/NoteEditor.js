import React from 'react';
import { generateId, generateColor, findObjectInArray, findPositionInArray } from "../utils/Utils";
// - Tiny MCE for WISYWIG
import { Editor } from '@tinymce/tinymce-react';

const NoteEditor = ({ selectedNote, notes, changeNote }) => {

  if (selectedNote !== null) {
    return (
      <Editor
        value={findObjectInArray(selectedNote, notes).contents}
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
          changeNote(selectedNote, { contents: newValue });
        }}
      />
    );
  } else {
    return null;
  }

};

export default NoteEditor;
