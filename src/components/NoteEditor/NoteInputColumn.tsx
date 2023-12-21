import NoteControls from "@/components/NoteEditor/components/NoteControls"
import NoteEditor from "@/components/NoteEditor/components/NoteEditor"
import NoteTitleBar from "@/components/NoteEditor/components/NoteTitleBar"
import { useNotesStore } from "@/state/notesStore"
import { activeScreenAtom } from "@/state/userAtoms"
import { ActiveScreen } from "@/types/uiTypes"
import { findObjectInArray } from "@/utils/objectUtils"
import { useAtom, useAtomValue } from "jotai"
import { memo, useCallback, useMemo } from "react"

// DEV NOTE
// This is an example of memoization of a component and callback.
// Memo'd editor does not re-render unless the props changed. Without this, it re-renders with almost any state change.
// The memoized callback ensures it does not get re-rendered when the callback is re-rendered. Without this, the editor would get re-rendered because the function was.

const NoteInputColumn = () => {
  const { selectedNoteID, notes, changeNote } = useNotesStore()
  const activeScreen = useAtomValue(activeScreenAtom)

  const selectedNote = selectedNoteID ? findObjectInArray(selectedNoteID, notes) : null
  const noteContent = selectedNote ? selectedNote.contents : null

  const onContentChanged = useCallback((content: string) => {
    changeNote(selectedNoteID, {
      contents: content,
      modified: new Date(),
    })
  }, [selectedNoteID])

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
          noteContent={noteContent}
          onContentChanged={onContentChanged}
          selectedNoteID={selectedNoteID}
        />
      </div>
      <NoteControls />
    </div>
  )
}

export default NoteInputColumn
