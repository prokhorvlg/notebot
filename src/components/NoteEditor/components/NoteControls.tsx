import Button from "@/components/common/Button"
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

  const onChangeTitle = (e) => {
    changeNote(selectedNoteID, { editMode: true })
    setActiveScreen(1)
  }

  const onDeleteNote = (e) => {
    deleteNote(selectedNoteID)
    setActiveScreen(1)
  }

  const onChangeCategory = (e) => {
    if (selectedNoteID !== null) {
      setCategorySetMode(true)
      setActiveScreen(0)
    }
  }

  return (
    <div className="note-controls">
      <Button onClick={onChangeTitle}>
        <FontAwesomeIcon icon={faEdit} className="fa-link-icon" />
        <span>Change title</span>
      </Button>
      <Button onClick={onDeleteNote}>
        <FontAwesomeIcon icon={faTrashAlt} className="fa-link-icon" />
        <span>Delete note</span>
      </Button>
      <Button onClick={onChangeCategory}>
        <FontAwesomeIcon icon={faExchangeAlt} className="fa-link-icon" />
        <span>Change category</span>
      </Button>
    </div>
  )
}

export default NoteControls
