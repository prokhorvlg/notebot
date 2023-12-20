import { usersCollection } from "@/api/firebase"
import { doc, getDoc, addDoc } from "firebase/firestore"

// Checks if user exists on cloud.
export const doesUserExist = async (userID: string): Promise<boolean | null> => {
  try {
    const userDoc = doc(usersCollection, userID)
    const userDocResult = await getDoc(userDoc)
    return userDocResult.exists()
  } catch (e) {
    console.warn("doesUserExist error:", e)
    return null
  }
}

// Creates new user and returns id.
export const createNewUser = async (): Promise<string | null> => {
  try {
    const newUserDocResult = await addDoc(usersCollection, {
      categories: [],
      notes: [],
      states: {},
    })
  
    return newUserDocResult.id
  } catch (e) {
    console.warn("createNewUser error:", e)
    return null
  }
}