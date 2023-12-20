import CategoryListItem from "@/components/CategoryList/components/CategoryListItem"
import { useCategoriesStore } from "@/state/categoriesStore"

const CategoriesList = () => {
  const { categories } = useCategoriesStore()

  if (categories) {
    return categories.map((category, i) => (
      <CategoryListItem key={category.id} category={category} />
    ))
  } else {
    return null
  }
}

export default CategoriesList
