import React from 'react';

// Components
import Category from './Category';

const CategoriesList = ({ categories, changeCategory, deleteCategory, selectCategory, changeNote, selectedNote, categorySetMode, setCategorySetMode }) => {

  return (
    categories.map((category, i) => (
      <Category
        category={category}
        changeCategory={changeCategory}
        deleteCategory = {deleteCategory}
        selectCategory = {selectCategory}
        categorySetMode={categorySetMode}
        setCategorySetMode={setCategorySetMode}
        changeNote={changeNote}
        selectedNote={selectedNote}
      />)
    )
  );

};

export default CategoriesList;
