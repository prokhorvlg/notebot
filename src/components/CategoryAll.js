import React, { useRef, useEffect } from 'react';

// CategoryAll: contains the button for the "all" category, which is not a true category.
const CategoryAll = ({selectCategory, selectedCategory}) => {

  // Append a selected class to all if all is selected.
  let selectedClassAll;
  if (selectedCategory === -1) {
    selectedClassAll = " selected";
  } else {
    selectedClassAll = "";
  }

  // Handles the click of the "all" category which displays all notes.
  const allCategoryClick = (e) => {
    e.preventDefault();
    selectCategory(-1);
  }

  return (
    <li>
      <a
        id="category-all"
        href="#"
        className={"category-all " + selectedClassAll}
        onClick={allCategoryClick}>
          All Notes
      </a>
    </li>
  );

};

export default CategoryAll;
