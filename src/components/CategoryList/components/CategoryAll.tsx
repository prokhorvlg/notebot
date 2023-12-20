import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { ActiveScreen } from "@/types/uiTypes"
import { useCategoriesStore } from "@/state/categoriesStore"
import { useAtom } from "jotai"
import { activeScreenAtom } from "@/state/userAtoms"

// CategoryAll: contains the button for the "all" category, which is not a true category.
const CategoryAll = () => {
  const { selectedCategoryID, selectCategory } = useCategoriesStore()

  const [activeScreen, setActiveScreen] = useAtom(activeScreenAtom)

  // Handles the click of the "all" category which displays all notes.
  const allCategoryClick = (e) => {
    e.preventDefault()

    const isMobile = window.matchMedia("screen and (max-width: 1024px)").matches
    selectCategory(null)
    if (!isMobile) setActiveScreen(ActiveScreen.NotesList)
  }

  const mobileAllCategoryClick = (e) => {
    e.preventDefault()
    selectCategory(null)
    setActiveScreen(ActiveScreen.NotesList)
  }

  return (
    <li>
      <button
        id="category-all"
        className={`category-button category-all ${
          !selectedCategoryID ? "selected" : ""
        }`}
        onClick={allCategoryClick}
      >
        All Notes
      </button>
      <button
        className="mobile-category-open"
        onClick={(e) => mobileAllCategoryClick(e)}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </li>
  )
}

export default CategoryAll
