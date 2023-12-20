import NoteControls from "@/components/NoteEditor/components/NoteControls"
import NoteEditor from "@/components/NoteEditor/components/NoteEditor"
import NoteTitleBar from "@/components/NoteEditor/components/NoteTitleBar"
import { useNotesStore } from "@/state/notesStore"
import { activeScreenAtom } from "@/state/userAtoms"
import { ActiveScreen } from "@/types/uiTypes"
import { useAtom } from "jotai"

const NoteInputColumn = () => {
  const { selectedNoteID, notes, changeNote } = useNotesStore()

  const [activeScreen, setActiveScreen] = useAtom(activeScreenAtom)

  return (
    <div
      className={
        "note-input-column " +
        (activeScreen === ActiveScreen.NoteEditor
          ? "selected showing-mobile"
          : "not-showing-mobile")
      }
    >
      <NoteTitleBar />
      <div className="note-contents">
        <NoteEditor
          selectedNoteID={selectedNoteID}
          notes={notes}
          changeNote={changeNote}
        />
      </div>
      <NoteControls />
    </div>
  )
}

export default NoteInputColumn
