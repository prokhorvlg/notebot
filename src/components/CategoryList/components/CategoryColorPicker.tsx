import { useEffect, useState } from "react"

import "react-color-palette/lib/css/styles.css"

import { HexColorPicker } from "react-colorful"
import { useDebouncedCallback } from "use-debounce"
import OutsideClickHandler from "react-outside-click-handler"
import { useCategoriesStore } from "@/state/categoriesStore"
import { editColorModeAtom } from "@/state/userAtoms"
import { useAtom } from "jotai"

const CategoryColorPicker = () => {
  const { selectedCategoryID, selectedCategoryColor, changeCategory } =
    useCategoriesStore()

  const [editColorMode, setEditColorMode] = useAtom(editColorModeAtom)

  // Handle color changes for the Category.
  // On app load, set the color to match the app state.
  const [value, setValue] = useState(selectedCategoryColor)

  // On color picker update, set app state to reflect color.
  const debounced = useDebouncedCallback((value) => {
    if (!selectedCategoryID) return

    setValue(value)
    changeCategory(selectedCategoryID, { color: value })
  }, 200)

  // Make sure the color pickers default value is updated whenever the category color changes.
  useEffect(() => {
    if (!selectedCategoryID) return

    setValue(selectedCategoryColor)
  }, [selectedCategoryColor])

  // Handle the user clicking outside of the color picker, effectively ending the selection.
  const handleOutsideColorClick = () => {
    setEditColorMode(false)
  }

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideColorClick}>
      <div
        className={
          "category-colorPicker " +
          (editColorMode === true ? "showing" : "not-showing")
        }
      >
        <HexColorPicker color={value} onChange={(e) => debounced(e)} />
      </div>
    </OutsideClickHandler>
  )
}

export default CategoryColorPicker
