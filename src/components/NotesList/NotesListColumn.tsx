import NotesList from "@/components/NotesList/components/NotesList"
import useFilterNotes from "@/hooks/useFilterNotes"
import { useCategoriesStore } from "@/state/categoriesStore"
import { useNotesStore } from "@/state/notesStore"
import { activeScreenAtom, searchStringAtom } from "@/state/userAtoms"
import { ActiveScreen } from "@/types/uiTypes"
import {
  faArrowLeft,
  faSearch,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAtom } from "jotai"

const NotesListColumn = () => {
  const { selectedCategoryColor } = useCategoriesStore()
  const { createEmptyNote } = useNotesStore()

  const [activeScreen, setActiveScreen] = useAtom(activeScreenAtom)
  const [searchString, setSearchString] = useAtom(searchStringAtom)

  useFilterNotes()

  return (
    <div
      className={
        "notes-list-column " +
        (activeScreen === ActiveScreen.NotesList
          ? "selected showing-mobile"
          : "not-showing-mobile")
      }
    >
      <div className="list-search-box">
        <button
          className="feature-return"
          onClick={() => {
            setActiveScreen(ActiveScreen.CategoriesList)
          }}
          style={{
            borderColor: selectedCategoryColor,
            color: selectedCategoryColor,
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="list-search-container">
          <h2>Search your notes</h2>
          <div className="list-search-input-container">
            <input
              className="feature-input"
              onInput={(e) =>
                setSearchString((e.target as HTMLInputElement).value)
              }
              style={{ borderColor: selectedCategoryColor }}
              value={searchString}
            />
            <div className="list-search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
      <ul>
        <NotesList />
      </ul>
      <div className="list-notes-add">
        <button onClick={createEmptyNote} className="feature-link">
          <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
          <span>Add note</span>
        </button>
      </div>
    </div>
  )
}

export default NotesListColumn
