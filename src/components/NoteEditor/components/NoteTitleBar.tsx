import Timestamp from "@/components/common/Timestamp"
import { useCategoriesStore } from "@/state/categoriesStore"
import { useNotesStore } from "@/state/notesStore"
import { activeScreenAtom } from "@/state/userAtoms"
import { ActiveScreen } from "@/types/uiTypes"
import { findObjectInArray } from "@/utils/objectUtils"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAtom } from "jotai"

const NoteTitleBar = () => {
  const { categories } = useCategoriesStore()

  const { notes, selectedNoteID } = useNotesStore()

  const [activeScreen, setActiveScreen] = useAtom(activeScreenAtom)

  const selectedNote = selectedNoteID
    ? findObjectInArray(selectedNoteID, notes)
    : null
  const activeNoteDate = selectedNote ? selectedNote.modified : null

  const selectedCategory = selectedNote
    ? findObjectInArray(selectedNote.category, categories)
    : null
  const selectedNoteColor = selectedCategory ? selectedCategory.color : "white"

  return (
    <div className="note-title-bar">
      <button
        className="feature-return"
        onClick={() => {
          setActiveScreen(ActiveScreen.NotesList)
        }}
        style={{ borderColor: selectedNoteColor, color: selectedNoteColor }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="note-title-bar-container">
        <div
          className="note-title-icon"
          style={{ backgroundColor: selectedNoteColor }}
        ></div>
        <div className="note-title-text">
          <h3>
            {selectedNoteID && selectedNote
              ? selectedNote.title
              : "Select a note"}
          </h3>
          {selectedNoteID && activeNoteDate ? (
            <Timestamp date={activeNoteDate} />
          ) : (
            <p>No note selected.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default NoteTitleBar
