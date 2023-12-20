import { usersCollection } from "@/api/firebase"
import { Note } from "@/types/noteTypes"
import { StorageKey } from "@/types/storageTypes"
import { getEntryFromByKey } from "@/utils/apiUtils"
import { convertTimestampsToDates } from "@/utils/dateUtils"
import { doc, updateDoc } from "firebase/firestore"

// Save all notes to cloud.
export const saveNotesToCloud = async (notes: Note[], userID: string) => {
  const userDoc = doc(usersCollection, userID)

  try {
    await updateDoc(userDoc, {
      [StorageKey.Notes]: notes,
    })
  } catch (e) {
    console.warn("saveNotesToCloud error:", e)
    return null
  }
}

// Get all notes from cloud.
export const getNotesFromCloud = async (
  userID: string
): Promise<Note[] | null> => {
  try {
    const notes = await getEntryFromByKey(userID, StorageKey.Notes)
    return convertTimestampsToDates(notes, "modified") as unknown as Note[]
  } catch (e) {
    console.warn("getNotesFromCloud error:", e)
  }
  return null
}