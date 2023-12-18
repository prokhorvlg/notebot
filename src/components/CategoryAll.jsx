import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// CategoryAll: contains the button for the "all" category, which is not a true category.
const CategoryAll = ({ selectCategory, selectedCategory, setActiveScreen }) => {

  // Handles the click of the "all" category which displays all notes.
  const allCategoryClick = (e) => {
    const isMobile = window.matchMedia('screen and (max-width: 1024px)').matches;
    e.preventDefault();
    selectCategory(-1);
    if (!isMobile) setActiveScreen(1);
  }

  const mobileAllCategoryClick = (e) => {
    e.preventDefault();
    selectCategory(-1);
    setActiveScreen(1);
  }

  return (
    <li>
      <button
        id="category-all"
        className={"category-button category-all " + ((selectedCategory === -1) ? 'selected' : '')}
        onClick={allCategoryClick}>
          All Notes
      </button>
      <button className="mobile-category-open"
        onClick={(e) => mobileAllCategoryClick(e)}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </li>
  );

};

export default CategoryAll;
