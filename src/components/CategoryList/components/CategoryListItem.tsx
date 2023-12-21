import { useRef, useEffect, forwardRef, ForwardedRef, useImperativeHandle } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Category } from "@/types/categoryTypes"

interface CategoryListItemProps {
  category: Category
  selectedCategoryID: string | null
  categorySetMode: boolean
  setEditMode: (category: Category) => void
  exitEditMode: (category: Category, value: string) => void
  editCategoryName: (category: Category, value: string) => void
}

const CategoryListItem = ({
  category,
  selectedCategoryID,
  categorySetMode,
  setEditMode,
  exitEditMode,
  editCategoryName
}: CategoryListItemProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    buttonRef.current?.focus()
  }, [category.editMode])

  if (category.editMode) {
    return (
      <li
        className={
          "category-item edit-mode" +
          (selectedCategoryID === category.id ? "selected" : "")
        }
      >
        <input
          id={"category-" + category.id}
          ref={inputRef}
          placeholder="Enter a category title."
          className="feature-input"
          onInput={(e) => editCategoryName(category, (e.target as HTMLInputElement).value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              (e.target as HTMLInputElement).blur()
            }
          }}
          onBlur={(e) => exitEditMode(category, (e.target as HTMLInputElement).value)}
          value={category.name}
          style={{ borderColor: category.color }}
        />
      </li>
    )
  } else {
    return (
      <li
        className={
          "category-item link-mode " +
          (categorySetMode === true ? "category-set-mode" : "")
        }
      >
        <button
          id={"category-" + category.id}
          ref={buttonRef}
          className={
            "category-button " +
            (selectedCategoryID === category.id ? "selected" : "")
          }
          style={{
            color: category.color,
            borderColor: category.color,
            backgroundColor: category.color,
          }}
          onClick={(e) => setEditMode(category)}
        >
          {category.name}
        </button>
        <button
          className="mobile-category-open"
          onClick={(e) => setEditMode(category)}
          style={{ color: category.color, borderColor: category.color }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </li>
    )
  }
}

export default CategoryListItem
