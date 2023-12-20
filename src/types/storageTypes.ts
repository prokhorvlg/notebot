import { ActiveScreen } from "@/types/uiTypes"

export enum StorageKey {
  Categories = "categories",
  Notes = "notes",
  Users = "users",
  States = "states"
}

export interface StatesDTO {
  searchString: string
  selectedCategoryID: number | null
  selectedNoteID: number | null
  activeScreen: ActiveScreen
}