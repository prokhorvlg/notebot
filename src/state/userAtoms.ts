import { ActiveScreen } from "@/types/uiTypes";
import { atom } from "jotai";

// Current user
export const userIDAtom = atom<string | null>(null)

// Has app finished loading?
export const appFinishedLoadingAtom = atom<boolean>(false)

// Is app in category set mode?
export const categorySetModeAtom = atom<boolean>(false)
// Is app in edit color mode?
export const editColorModeAtom = atom<boolean>(false)

// Current search string
export const searchStringAtom = atom<string>("")
// Current active screen (mobile)
export const activeScreenAtom = atom<ActiveScreen>(ActiveScreen.CategoriesList)