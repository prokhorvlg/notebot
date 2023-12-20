import { useCategoriesStore } from "@/state/categoriesStore"
import { useNotesStore } from "@/state/notesStore"
import {
  appFinishedLoadingAtom,
  searchStringAtom,
  userIDAtom,
} from "@/state/userAtoms"
import { useAtom } from "jotai"
import { useEffect } from "react"

const useFilterNotes = () => {
  const { selectedCategoryID } = useCategoriesStore()

  const { notes, changeNote } = useNotesStore()

  const [userID] = useAtom(userIDAtom)
  const [appFinishedLoading, setAppFinishedLoading] = useAtom(
    appFinishedLoadingAtom
  )
  const [searchString] = useAtom(searchStringAtom)

  // Filter selection when selection changes
  useEffect(() => {
    if (!appFinishedLoading || !notes || !changeNote) return

    // Filter the list of notes down...
    notes.forEach((note) => {
      // Is note in this category?
      const noteIsInSelectedCategory =
        note.category === selectedCategoryID || selectedCategoryID === null

      // Does it match search string?
      const noteContainsSearchString =
        note.title.toLowerCase().includes(searchString.toLowerCase()) ||
        note.contents.toLowerCase().includes(searchString.toLowerCase()) ||
        searchString === ""

      // Change state to reflect its visibility in list.
      if (noteIsInSelectedCategory && noteContainsSearchString) {
        changeNote(note.id, { visible: true })
      } else {
        changeNote(note.id, { visible: false })
      }
    })
  }, [userID, searchString, selectedCategoryID])
}

export default useFilterNotes
