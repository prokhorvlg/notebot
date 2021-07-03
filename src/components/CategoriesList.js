import React from 'react';

// Components
import Category from './Category';

const CategoriesList = ({categories, changeCategory, deleteCategory, selectCategory}) => {

  return (
    categories.map((category, i) => (
      <Category
        category={category}
        changeCategory={changeCategory}
        deleteCategory = {deleteCategory}
        selectCategory = {selectCategory}
      />)
    )
  );

};

export default CategoriesList;
