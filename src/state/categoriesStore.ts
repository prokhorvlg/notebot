import { Category } from "@/types/categoryTypes"
import { generateColor } from "@/utils/colorUtils"
import { findObjectInArray, findPositionInArray } from "@/utils/objectUtils"
import { create } from "zustand"

const DEFAULT_CATEGORY_COLOR = "#ffffff"

interface CategoriesState {
  // STATE
  selectedCategoryID: string | null
  selectedCategoryColor: string
  categories: Category[]

  // ACTIONS
  setCategories
  setSelectedCategoryID
  createEmptyCategory
  changeCategory
  selectCategory
  deleteCategory
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  // Stores the categories associated with the user.
  categories: [],
  setCategories: (newCategories: Category[]) =>
    set((state) => ({ categories: newCategories })),

  // Stores the currently selected category that is highlighted and who's notes are being displayed.
  selectedCategoryID: null,
  setSelectedCategoryID: (id: string) =>
    set((state) => ({ selectedCategoryID: id })),

  // Set the theme color of the category editor box and its contents.
  selectedCategoryColor: DEFAULT_CATEGORY_COLOR,

  // Create a new empty category (a bucket for notes).
  createEmptyCategory: () =>
    set((state) => {
      const newColor = generateColor()
      const emptyCategory = {
        id: crypto.randomUUID(),
        name: "",
        color: newColor,
        editMode: true,
      }

      return {
        categories: [...state.categories, emptyCategory],
      }
    }),

  // Change category to the details provided in the input object.
  changeCategory: (id: string, newProperties: Partial<Category>) =>
    set((state) => {
      // Find the object with the relevant id.
      const originalCategory = findObjectInArray(id, state.categories)
      // Replace any values within it with the submitted properties.
      const newCategory = { ...originalCategory, ...newProperties } as Category

      // Construct a new array to replace the state.
      const newCategories = [...state.categories]
      const categoryPosition = findPositionInArray(id, state.categories)
      newCategories[categoryPosition] = newCategory

      return {
        categories: newCategories,
      }
    }),

  // Select category with given id (and update active color).
  selectCategory: (id: string) =>
    set((state) => {
      const newSelectedCategory = findObjectInArray(id, state.categories)
      const selectedCategoryColor =
        newSelectedCategory
          ? newSelectedCategory.color
          : DEFAULT_CATEGORY_COLOR
      return {
        selectedCategoryID: id,
        selectedCategoryColor: selectedCategoryColor,
      }
    }),

  // Delete a category with given id.
  deleteCategory: (id: string) =>
    set((state) => {
      // There must be at least 1 category to create notes into.
      if (state.categories.length === 1) return state

      // Create new categories array with the object removed.
      let newCategories = [...state.categories]
      const categoryPosition = findPositionInArray(id, state.categories)
      newCategories.splice(categoryPosition, 1)

      // Delete the category from the cloud.
      //deleteItemFromCloud(id, StorageKey.Categories, userID)
      // Delete all notes that were associated with this category.
      //deleteCategoryNotes(id); //TODO

      return {
        categories: newCategories,
        selectedCategoryID: null,
      }
    }),
}))
