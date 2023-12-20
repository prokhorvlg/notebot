import CategoriesList from "@/components/CategoryList/components/CategoriesList"
import CategoryAll from "@/components/CategoryList/components/CategoryAll"
import CategoryColorPicker from "@/components/CategoryList/components/CategoryColorPicker"
import CategoryEditControls from "@/components/CategoryList/components/CategoryEditControls"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NotebotLogo from "@/images/notebot-logo-nobg.png"
import { activeScreenAtom } from "@/state/userAtoms"
import { ActiveScreen } from "@/types/uiTypes"
import { useAtom } from "jotai"
import { useCategoriesStore } from "@/state/categoriesStore"
import Button from "@/components/common/Button"

const CategoriesListColumn = () => {
  const { createEmptyCategory } = useCategoriesStore()

  const [activeScreen, setActiveScreen] = useAtom(activeScreenAtom)

  return (
    <div
      className={`categories-list-column ${
        activeScreen === ActiveScreen.CategoriesList
          ? "selected showing-mobile"
          : "not-showing-mobile"
      }`}
    >
      <div className="main-logo">
        <div className="box-logo">
          <img src={NotebotLogo} alt="notebotLogo" />
        </div>
        <h1>Notebot</h1>
      </div>
      <div className="main-categories">
        <ul className="main-categories-list">
          <CategoryAll />
          <CategoriesList />
        </ul>
        <CategoryColorPicker />
        <CategoryEditControls />
        <div className="main-categories-add">
          <Button onClick={createEmptyCategory}>
            <FontAwesomeIcon icon={faPlusSquare} className="fa-link-icon" />
            <span>Add category</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CategoriesListColumn
