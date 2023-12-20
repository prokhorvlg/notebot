import { Note } from "@/types/noteTypes"
import { findObjectInArray } from "@/utils/objectUtils"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './NoteEditor.scss'
import { useEffect, useState } from "react";

const NoteEditor = ({
  selectedNoteID,
  notes,
  changeNote,
}: {
  selectedNoteID: string | null
  notes: Note[]
  changeNote: (id: string, newNote: Partial<Note>) => void
}) => {
  if (!selectedNoteID) return null
  const selectedNote = findObjectInArray(selectedNoteID, notes)
  const noteContents = selectedNote ? selectedNote.contents : null

  console.log("NoteEditor: selectedNote", selectedNote)
  console.log("NoteEditor: noteContents", noteContents)

  const onEditorChange = (newValue: string) => {
    console.log("onEditorChange: noteContents", noteContents)
    console.log("onEditorChange: newValue", newValue)
    const hasChanged = noteContents !== newValue
    console.log("onEditorChange hasChanged", hasChanged)
    if (hasChanged) {
      changeNote(selectedNoteID, {
        contents: newValue,
        modified: new Date()
      })
    }
  }

  if (selectedNote && noteContents !== null) {
    return (
      <ReactQuill 
        value={noteContents}
        onChange={onEditorChange} 
        modules={{
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'code', 'clean'],
          ]
        }}
      />
    )    
  } else {
    return null
  }
}

export default NoteEditor
