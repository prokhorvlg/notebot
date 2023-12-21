import NoteListItem from "@/components/NotesList/components/NoteListItem"
import { useNotesStore } from "@/state/notesStore"
import { Note } from "@/types/noteTypes"

const NotesList = () => {
  const { notes } = useNotesStore()

  const sortedNotes = notes.sort((a, b) => {
    return (new Date(b.modified) as any) - (new Date(a.modified) as any)
  })

  const numVisibleNotes = notes.filter((note) => note.visible).length

  if (numVisibleNotes === 0) return <p className="no-notes-found">No notes found matching filter parameters.</p>

  return sortedNotes.map((note: Note) => (
    <NoteListItem key={note.id} note={note} />
  ))
}

export default NotesList
