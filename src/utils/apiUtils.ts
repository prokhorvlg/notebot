import { usersCollection } from "@/api/firebase"
import { StorageKey } from "@/types/storageTypes"
import { doc, getDoc } from "firebase/firestore"

// Get a user data entry from cloud.
export const getEntryFromByKey = async (
  userID: string,
  key: StorageKey
): Promise<any> => {
  const userDoc = doc(usersCollection, userID)

  try {
    const userDocResult = await getDoc(userDoc)
    const data = userDocResult.data()

    if (!data) throw new Error("Collection does not exist on cloud.")

    return data[key]
  } catch (e) {
    console.warn("getStatesFromCloud error:", e)
    return null
  }
}
