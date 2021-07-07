import React from 'react';

// Components
import Category from './Category';

const CategoriesList = ({ categories, changeCategory, deleteCategory, selectCategory, selectedCategory, changeNote, selectedNote, categorySetMode, setCategorySetMode, setActiveScreen }) => {

  if (categories) {
    return (
      categories.map((category, i) => (
        <Category
          category={category}
          changeCategory={changeCategory}
          deleteCategory = {deleteCategory}
          selectCategory = {selectCategory}
          selectedCategory = {selectedCategory}
          categorySetMode={categorySetMode}
          setCategorySetMode={setCategorySetMode}
          changeNote={changeNote}
          selectedNote={selectedNote}
          setActiveScreen={setActiveScreen}
        />))
      );
    } else {
      return null;
    }

};

export default CategoriesList;
