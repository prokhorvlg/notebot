import { firebaseDB } from "@/api/firebase"
import { Category } from "@/types/categoryTypes"
import { StorageKey } from "@/types/storageTypes"
import { getEntryFromByKey } from "@/utils/apiUtils"
import { collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore"

const usersCollection = collection(firebaseDB, StorageKey.Users)

// Save all categories to cloud.
export const saveCategoriesToCloud = async (
  categories: Category[],
  userID: string
) => {
  const userDoc = doc(usersCollection, userID)

  try {
    await updateDoc(userDoc, {
      [StorageKey.Categories]: categories,
    })
  } catch (e) {
    console.warn("saveCategoriesToCloud error:", e)
    return null
  }
}

// Get all categories from cloud.
export const getCategoriesFromCloud = async (
  userID: string
): Promise<Category[] | null> => {
  try {
    const categories = await getEntryFromByKey(userID, StorageKey.Categories)
    return categories as Category[]
  } catch (e) {
    console.warn("getCategoriesFromCloud error:", e)
  }
  return null
}