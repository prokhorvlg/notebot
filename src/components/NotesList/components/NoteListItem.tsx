import Timestamp from "@/components/common/Timestamp"
import { useCategoriesStore } from "@/state/categoriesStore"
import { useNotesStore } from "@/state/notesStore"
import { activeScreenAtom } from "@/state/userAtoms"
import { Note } from "@/types/noteTypes"
import { findObjectInArray } from "@/utils/objectUtils"
import { useAtom } from "jotai"
import { useRef, useEffect } from "react"

const NoteListItem = ({ note }: { note: Note }) => {
  const { categories } = useCategoriesStore()

  const { selectedNoteID, changeNote, deleteNote, selectNote } = useNotesStore()

  const [activeScreen, setActiveScreen] = useAtom(activeScreenAtom)

  // Make sure that the input element is focused when the note is in edit mode.
  const noteRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!noteRef.current) return
    if (note.editMode) {
      noteRef.current.focus()
    }
  }, [note.editMode])

  // Update the "last modified" time to now any time the contents of the notes change.
  useEffect(() => {
    if (selectedNoteID && selectedNoteID === note.id) {
      changeNote(note.id, { modified: new Date() })
    }
  }, [note.title])

  // Handle any events that occur in edit mode.
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur()
    }
  }
  const handleExit = (e) => {
    // If the input is empty, delete the Category.
    if (e.target.value === "") {
      deleteNote(note.id)
    } else {
      // If input is not empty, update the Category state.
      changeNote(note.id, { title: e.target.value, editMode: false })
      // Select the newly edited category.
      selectNote(note.id)
    }
  }
  const handleEdit = (e) => {
    changeNote(note.id, { title: e.target.value })
  }

  // Handle any events that occur in normal mode (as an anchor).
  const handleClick = (e) => {
    selectNote(note.id)
    setActiveScreen(2)
  }

  const parentCategory = findObjectInArray(note.category, categories)
  const parentColor = parentCategory ? parentCategory.color : "white"

  if (note.editMode) {
    return (
      <li
        className={
          "category-item edit-mode " +
          (selectedNoteID === note.id ? "selected" : "")
        }
      >
        <input
          id={"note-" + note.id}
          ref={noteRef}
          placeholder="Enter a note title."
          className="feature-input"
          onInput={(e) => handleEdit(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(e) => handleExit(e)}
          value={note.title}
          style={{ borderColor: parentColor }}
        />
      </li>
    )
  } else if (note.visible) {
    return (
      <li
        className={
          "note-title link-mode " +
          (selectedNoteID === note.id ? "selected" : "")
        }
      >
        <button onClick={(e) => handleClick(e)}>
          <div
            className="note-title-color"
            style={{
              backgroundColor: parentColor,
            }}
          ></div>
          <div className="note-title-box">
            <h2>{note.title}</h2>
            <Timestamp date={note.modified} />
          </div>
        </button>
      </li>
    )
  } else {
    return null
  }
}

export default NoteListItem
