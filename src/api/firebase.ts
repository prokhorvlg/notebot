import { StorageKey } from '@/types/storageTypes'
import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseDB = getFirestore(firebaseApp)

export const usersCollection = collection(firebaseDB, StorageKey.Users)