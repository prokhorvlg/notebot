
import {
  appFinishedLoadingAtom,
} from "@/state/userAtoms"
import { useAtom } from "jotai"
import LoadingScreen from "@/components/LoadingScreen"
import CategoriesListColumn from "@/components/CategoryList/CategoriesListColumn"
import NoteInputColumn from "@/components/NoteEditor/NoteInputColumn"
import useSync from "@/hooks/useSync"
import NotesListColumn from "@/components/NotesList/NotesListColumn"


const NoteScreen = () => {
  // Handles all cloud loading and syncing.
  useSync()

  const [appFinishedLoading] = useAtom(appFinishedLoadingAtom)

  return (
    <div className="app-container">
      {!appFinishedLoading && <LoadingScreen />}
      {appFinishedLoading && (
        <>
          <CategoriesListColumn />
          <NotesListColumn />
          <NoteInputColumn />
        </>
      )}
    </div>
  )
}

export default NoteScreen