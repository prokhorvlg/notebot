import { Timestamp } from "firebase/firestore"

export type Note = {
    id: string
    title: string
    category: any
    contents: string
    modified: Date

    selected: boolean
    editMode: boolean
    visible: boolean
}

export type NoteFirestore = Note & {
    modified: Timestamp
}