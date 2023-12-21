import NoteListItem from "@/components/NotesList/components/NoteListItem"
import { useCategoriesStore } from "@/state/categoriesStore"
import { useNotesStore } from "@/state/notesStore"
import { activeScreenAtom } from "@/state/userAtoms"
import { Note } from "@/types/noteTypes"
import { useAtom } from "jotai"

const NotesList = () => {
  const { notes } =
    useNotesStore()

  return notes
    .sort((a, b) => {
      return (
        (new Date((b).modified) as any) -
        (new Date((a).modified) as any)
      )
    })
    .map((note: Note) => (
      <NoteListItem
        key={note.id}
        note={note}
      />
    ))
}

export default NotesList
