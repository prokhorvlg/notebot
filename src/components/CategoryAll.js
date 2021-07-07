import React from 'react';

// CategoryAll: contains the button for the "all" category, which is not a true category.
const CategoryAll = ({ selectCategory, selectedCategory, setActiveScreen }) => {

  // Handles the click of the "all" category which displays all notes.
  const allCategoryClick = (e) => {
    e.preventDefault();
    selectCategory(-1);
    setActiveScreen(1);
  }

  return (
    <li>
      <button
        id="category-all"
        className={"category-all " + ((selectedCategory === -1) ? 'selected' : '')}
        onClick={allCategoryClick}>
          All Notes
      </button>
    </li>
  );

};

export default CategoryAll;
