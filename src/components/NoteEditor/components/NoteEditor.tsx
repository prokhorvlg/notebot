import { Note } from "@/types/noteTypes"
import { findObjectInArray } from "@/utils/objectUtils"
// import { Editor } from '@tinymce/tinymce-react'

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

  if (selectedNote && noteContents) {
    return null
    //   <Editor
    //     value={noteContents}
    //     apiKey="nacx0iqah4xpy7tb8prkc3hy42bdva4exnbaurkyumhwg0f2" // nacx0iqah4xpy7tb8prkc3hy42bdva4exnbaurkyumhwg0f2 //lxoa4wxv9aflidpyv7x4eeplnfhtz2yn7xa8otn6mo3bdsy7
    //     init={{
    //       menubar: false,
    //       plugins: [
    //         "link",
    //         "code",
    //         "lists"
    //         // "advlist autolink lists link charmap print preview anchor help searchreplace visualblocks code insertdatetime media table paste wordcount",
    //       ],
    //       toolbar:
    //         "undo redo | formatselect | bold italic | blocks fontfamily fontsize | alignleft aligncenter alignright | \
    //         bullist numlist outdent indent | link",
    //     }}
    //     onEditorChange={(newValue, editor) => {
    //       const hasChanged = noteContents !== newValue
    //       if (hasChanged) {
    //         changeNote(selectedNoteID, {
    //           contents: newValue,
    //           modified: new Date(),
    //         })
    //       }
    //     }}
    //   />
    
  } else {
    return null
  }
}

export default NoteEditor
