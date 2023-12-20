import { useNotesStore } from "@/state/notesStore"
import { activeScreenAtom, categorySetModeAtom } from "@/state/userAtoms"
import {
  faEdit,
  faTrashAlt,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAtom } from "jotai"

const NoteControls = () => {
  const { changeNote, deleteNote, selectedNoteID } = useNotesStore()

  const [activeScreen, setActiveScreen] = useAtom(activeScreenAtom)
  const [categorySetMode, setCategorySetMode] = useAtom(categorySetModeAtom)

  return (
    <div className="note-controls">
      <button
        className="feature-link"
        onClick={(e) => {
          changeNote(selectedNoteID, { editMode: true })
          setActiveScreen(1)
        }}
      >
        <FontAwesomeIcon icon={faEdit} className="fa-link-icon" />
        <span>Change title</span>
      </button>
      <button
        className="feature-link"
        onClick={(e) => {
          deleteNote(selectedNoteID)
          setActiveScreen(1)
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} className="fa-link-icon" />
        <span>Delete note</span>
      </button>
      <button
        className="feature-link"
        onClick={(e) => {
          if (selectedNoteID !== null) {
            setCategorySetMode(true)
            setActiveScreen(0)
          }
        }}
      >
        <FontAwesomeIcon icon={faExchangeAlt} className="fa-link-icon" />
        <span>Change category</span>
      </button>
    </div>
  )
}

export default NoteControls
