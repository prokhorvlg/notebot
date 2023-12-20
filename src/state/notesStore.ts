import { useCategoriesStore } from "@/state/categoriesStore"
import { Note } from "@/types/noteTypes"
import { findObjectInArray, findPositionInArray } from "@/utils/objectUtils"
import { create } from "zustand"

interface NotesState {
  // STATE
  notes: Note[]
  selectedNoteID: string | null

  // ACTIONS
  setNotes
  setSelectedNoteID
  createEmptyNote
  changeNote
  selectNote
  deleteNote
}

export const useNotesStore = create<NotesState>((set, get) => ({
  // Stores notes associated with the user.
  notes: [],
  setNotes: (newNotes: Note[]) => set((state) => ({ notes: newNotes })),

  // Stores currently selected note being edited in main panel.
  selectedNoteID: null,
  setSelectedNoteID: (id: string) => set((state) => ({ selectedNoteID: id })),

  // Create a new empty note.
  createEmptyNote: () =>
    set((state) => {
      const { selectedCategoryID, categories } = useCategoriesStore.getState()

      const assignedCategory =
        selectedCategoryID !== null ? selectedCategoryID : categories[0].id
      const emptyNote = {
        id: crypto.randomUUID(),
        title: "",
        category: assignedCategory,
        modified: new Date(),
        contents: "",
        selected: false,
        editMode: true,
        visible: true,
        color: "white"
      }

      // DEV NOTE
      // Automatically changes when entire note structure is saved.
      // In real app, POST would be here.

      return {
        notes: [...state.notes, emptyNote],
      }
    }),

  // Change note to the details provided in the input object.
  changeNote: (id: string, newProperties: Partial<Note>) =>
    set((state) => {
      // Find the object with the relevant id.
      const originalNote = findObjectInArray(id, state.notes)
      // Replace any values within it with the submitted properties.
      const newNote = { ...originalNote, ...newProperties } as Note

      // Construct a new array to replace the state.
      const newNotes = [...state.notes]
      const notePosition = findPositionInArray(id, state.notes)
      newNotes[notePosition] = newNote

      // DEV NOTE
      // Automatically changes when entire note structure is saved.
      // In real app, PUT call would be here.

      return {
        notes: newNotes,
      }
    }),

  // Select note with given id.
  selectNote: (id: string) =>
    set((state) => {
      return {
        selectedNoteID: id,
      }
    }),

  // Delete a note with given id.
  deleteNote: (id: string) =>
    set((state) => {
      let newNotes = [...state.notes]
      const notePosition = findPositionInArray(id, state.notes)
      newNotes.splice(notePosition, 1)

      // DEV NOTE
      // Automatically deleted when entire note structure is saved.
      // In real app, DELETE call would be here.

      return {
        notes: newNotes,
        selectedNoteID: null,
      }
    }),
}))
