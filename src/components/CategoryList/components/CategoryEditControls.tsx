import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faFill, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { useCategoriesStore } from "@/state/categoriesStore"
import { editColorModeAtom } from "@/state/userAtoms"
import { useAtom } from "jotai"

// CategoryEditControls: contains a list of controls for editing the currently selected category.
const CategoryEditControls = () => {
  const {
    selectedCategoryID,
    selectedCategoryColor,
    changeCategory,
    deleteCategory,
  } = useCategoriesStore()

  const [editColorMode, setEditColorMode] = useAtom(editColorModeAtom)

  // Handles click of edit category title click.
  const editCategoryTitleClick = (e) => {
    // Set the target category into edit mode, unless it is the all category.
    if (selectedCategoryID !== null) {
      changeCategory(selectedCategoryID, { editMode: true })
    }
  }

  // Handles click of edit color category.
  const editCategoryColorClick = (e) => {
    // Set the target category into edit mode, unless it is the all category.
    if (selectedCategoryID !== null) {
      changeCategory(selectedCategoryID, {
        editMode: false,
      })
      if (editColorMode === true) {
        setEditColorMode(false)
      } else {
        setEditColorMode(true)
      }
    }
  }

  // Handles click of delete category.
  const deleteCategoryClick = (e) => {
    // Delete the currently selected category, unless it is the all category.
    if (selectedCategoryID !== null) {
      deleteCategory(selectedCategoryID)
    }
  }

  return (
    <div
      style={{ borderColor: selectedCategoryColor }}
      className={
        "main-categories-controls " +
        (selectedCategoryID !== null ? "showing" : "not-showing")
      }
    >
      <button onClick={editCategoryTitleClick}>
        <FontAwesomeIcon
          icon={faEdit}
          color={selectedCategoryColor}
          className="fa-link-icon"
          fixedWidth
        />
        <span>Edit title</span>
      </button>
      <button onClick={editCategoryColorClick}>
        <FontAwesomeIcon
          icon={faFill}
          color={selectedCategoryColor}
          className="fa-link-icon"
          fixedWidth
        />
        <span>Edit color</span>
      </button>
      <button onClick={deleteCategoryClick}>
        <FontAwesomeIcon
          icon={faTrashAlt}
          color={selectedCategoryColor}
          className="fa-link-icon"
          fixedWidth
        />
        <span>Delete category</span>
      </button>
    </div>
  )
}

export default CategoryEditControls
