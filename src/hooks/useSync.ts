import { useEffect } from "react"
import { useDebouncedCallback } from "use-debounce"
import { useCategoriesStore } from "@/state/categoriesStore"
import { StorageKey } from "@/types/storageTypes"
import { useNotesStore } from "@/state/notesStore"
import CategoriesInitialData from "@/data/CategoriesInitialData"
import NotesInitialData, { DEFAULT_NOTE_ID } from "@/data/NotesInitialData"
import {
  searchStringAtom,
  appFinishedLoadingAtom,
  activeScreenAtom,
  userIDAtom,
} from "@/state/userAtoms"
import { useAtom } from "jotai"
import {
  getQueryStringUser,
  saveQueryStringUser,
} from "@/utils/queryStringUtils"
import { createNewUser, doesUserExist } from "@/api/services/users"
import { getCategoriesFromCloud, saveCategoriesToCloud } from "@/api/services/categories"
import { getNotesFromCloud, saveNotesToCloud } from "@/api/services/notes"
import { getStatesFromCloud, saveStatesToCloud } from "@/api/services/appstate"
import { ActiveScreen } from "@/types/uiTypes"

const CLOUD_SYNC_DELAY = 2000

// Handles automatic syncing of collections.
const useSync = () => {
  const {
    categories,
    setCategories,
    selectedCategoryID,
    setSelectedCategoryID,
  } = useCategoriesStore()

  const { notes, setNotes, selectedNoteID, setSelectedNoteID } = useNotesStore()

  const [searchString, setSearchString] = useAtom(searchStringAtom)
  const [appFinishedLoading, setAppFinishedLoading] = useAtom(
    appFinishedLoadingAtom
  )
  const [activeScreen, setActiveScreen] = useAtom(activeScreenAtom)
  const [userID, setUserID] = useAtom(userIDAtom)

  // Load existing user if exists, or create new one
  const initializeUserFromQueryString = async (): Promise<{
    userID: string
    userIsExisting: boolean
  }> => {
    // Try to retrieve the user if it exists.
    const myUserID = getQueryStringUser()
    const userExists = myUserID ? await doesUserExist(myUserID) : false

    // If user exists on cloud, set it as the userId.
    if (userExists && myUserID) {
      return {
        userID: myUserID,
        userIsExisting: true,
      }
    }
    // If user does not exist, create the user on Firebase.
    else {
      const newUserID = await createNewUser()
      if (!newUserID) throw new Error("Failed to get new user id.")

      saveQueryStringUser(newUserID)
      return {
        userID: newUserID,
        userIsExisting: false,
      }
    }
  }

  // Get all collections and app state from cloud
  const initializeExistingUserFromCloud = async (userID: string) => {
    // Collect categories...
    setCategories(await getCategoriesFromCloud(userID))
    // Collect notes...
    setNotes(await getNotesFromCloud(userID))
    // Collect user state...
    const statesFromCloud = await getStatesFromCloud(userID)
    if (statesFromCloud) {
      setSearchString(statesFromCloud.searchString)
      setSelectedCategoryID(statesFromCloud.selectedCategoryID)
      setSelectedNoteID(statesFromCloud.selectedNoteID)
      setActiveScreen(statesFromCloud.activeScreen)
    }
  }

  // Create default collections and app state for cloud
  const initializeNewUserToCloud = async (userID: string) => {
    // Initialize new categories...
    setCategories(CategoriesInitialData)
    saveCategoriesToCloud(CategoriesInitialData, userID)

    // Initialize new notes...
    const notesInitialData = await NotesInitialData()
    setNotes(notesInitialData)
    saveNotesToCloud(notesInitialData, userID)

    // Initialize new app state...
    setSelectedNoteID(DEFAULT_NOTE_ID)
    saveStatesToCloud(
      {
        searchString: "",
        selectedCategoryID: null,
        selectedNoteID: null,
        activeScreen: ActiveScreen.CategoriesList,
      },
      userID
    )
  }

  const initializeApp = async () => {
    try {
      const { userID, userIsExisting } = await initializeUserFromQueryString()

      setUserID(userID)

      // If user exists, get all collections.
      if (userIsExisting) {
        await initializeExistingUserFromCloud(userID)
      }
      // If user does not exist, set them up.
      else {
        await initializeNewUserToCloud(userID)
      }

      setAppFinishedLoading(true)
    } catch (e) {
      console.warn("initializeApp error:", e)
    }
  }

  // Initialize new user or existing user on load.
  useEffect(() => {
    initializeApp()
  }, [])

  // Debounced callbacks for app state, categories, notes.
  const saveStateDebounce = useDebouncedCallback(
    ([
      searchString,
      selectedCategoryID,
      selectedNoteID,
      activeScreen,
      userID,
    ]) => {
      saveStatesToCloud(
        {
          searchString,
          selectedCategoryID,
          selectedNoteID,
          activeScreen,
        },
        userID
      )
    },
    CLOUD_SYNC_DELAY
  )

  const saveCategoriesDebounce = useDebouncedCallback(
    ([collection, userID]) => {
      saveCategoriesToCloud(collection, userID)
    },
    CLOUD_SYNC_DELAY
  )

  const saveNotesDebounce = useDebouncedCallback(
    ([collection, userID]) => {
      saveNotesToCloud(collection, userID)
    },
    CLOUD_SYNC_DELAY
  )

  // DEMO NOTE
  // In a real application... this wouldn't exist. This is just the simplest way of implementing a Firebase sync. It's too heavy for enterprise use.
  // In real life, we're more likely to rely on conventional REST calls or perhaps a GraphQL query.
  // For example, a mutation within the categories store would force a PUT call, provided category id and parameters, the back end would update that particular item in place.

  // Sync app state to cloud on any app state change.
  useEffect(() => {
    if (appFinishedLoading) {
      saveStateDebounce([
        searchString,
        selectedCategoryID,
        selectedNoteID,
        activeScreen,
        userID,
      ])
    }
  }, [searchString, selectedCategoryID, selectedNoteID, activeScreen])

  // Sync categories to cloud whenever updated.
  useEffect(() => {
    if (categories && categories.length) {
      saveCategoriesDebounce([categories, userID])
    }
  }, [categories])

  // Sync notes to cloud whenever updated.
  useEffect(() => {
    if (notes && notes.length) {
      saveNotesDebounce([notes, userID])
    }
  }, [notes])
}

export default useSync
