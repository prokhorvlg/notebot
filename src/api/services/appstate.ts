import { usersCollection } from "@/api/firebase"
import { StatesDTO, StorageKey } from "@/types/storageTypes"
import { getEntryFromByKey } from "@/utils/apiUtils"
import { doc, updateDoc } from "firebase/firestore"

// Save app state to cloud.
export const saveStatesToCloud = async (states: StatesDTO, userID: string) => {
  const userDoc = doc(usersCollection, userID)

  try {
    await updateDoc(userDoc, {
      [StorageKey.States]: states,
    })
  } catch (e) {
    console.warn("saveStatesToCloud error:", e)
    return null
  }
}

// Get app state from cloud.
export const getStatesFromCloud = async (
  userID: string
): Promise<StatesDTO | null> => {
  try {
    const states = await getEntryFromByKey(userID, StorageKey.States)
    return states as StatesDTO
  } catch (e) {
    console.warn("getStatesFromCloud error:", e)
  }
  return null
}
