import CategoryListItem from "@/components/CategoryList/components/CategoryListItem"
import { useCategoriesStore } from "@/state/categoriesStore"
import { useNotesStore } from "@/state/notesStore"
import { activeScreenAtom, categorySetModeAtom } from "@/state/userAtoms"
import { Category } from "@/types/categoryTypes"
import { ActiveScreen } from "@/types/uiTypes"
import { useAtom, useSetAtom } from "jotai"

const CategoriesList = () => {
  const { categories, selectedCategoryID, changeCategory, selectCategory, deleteCategory } =
    useCategoriesStore()

  const { selectedNoteID, changeNote } = useNotesStore()

  const [categorySetMode, setCategorySetMode] = useAtom(categorySetModeAtom)
  const setActiveScreen = useSetAtom(activeScreenAtom)

  // Enter edit mode for category item.
  const setEditMode = (category: Category) => {
    const isMobile = window.matchMedia("screen and (max-width: 1024px)").matches

    if (!categorySetMode) {
      selectCategory(category.id)
      if (!isMobile) setActiveScreen(ActiveScreen.NotesList)

    } else {
      changeNote(selectedNoteID, { category: category.id })
      setCategorySetMode(false)
      selectCategory(category.id)

      if (!isMobile) setActiveScreen(ActiveScreen.NotesList)
    }
  }

  // Exit edit mode for category item.
  const exitEditMode = (category: Category, value: string) => {
    if (value === "") {
      deleteCategory(category.id)
    } else {
      changeCategory(category.id, { name: value, editMode: false })
      selectCategory(category.id)
    }
  }

  // Change name of category.
  const editCategoryName = (category: Category, value: string) => {
    changeCategory(category.id, { name: value })
  }

  if (categories) {
    return categories.map((category, i) => (
      <CategoryListItem 
        key={category.id} 
        category={category}
        selectedCategoryID={selectedCategoryID}
        categorySetMode={categorySetMode}
        setEditMode={setEditMode}
        exitEditMode={exitEditMode}
        editCategoryName={editCategoryName}
      />
    ))
  } else {
    return null
  }
}

export default CategoriesList
