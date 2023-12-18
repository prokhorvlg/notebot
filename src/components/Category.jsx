import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Category = ({ category, changeCategory, deleteCategory, selectCategory, selectedCategory, categorySetMode, setCategorySetMode, changeNote, selectedNote, setActiveScreen }) => {

  // Make sure that the input element is focused when the category is in edit mode.
  const categoryRef = useRef(null);
  useEffect(() => {
    if (category.editMode) {
      categoryRef.current.focus();
    }
  }, [category.editMode]);

  // Handle any events that occur in edit mode.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  }
  const handleExit = (e) => {
    // If the input is empty, delete the Category.
    if (e.target.value === "") {
      deleteCategory(category.id);
    } else {
      // If input is not empty, update the Category state.
      changeCategory(category.id, { name: e.target.value, editMode: false });
      // Select the newly edited category.
      selectCategory(category.id);
    }
  }
  const handleEdit = (e) => {
    changeCategory(category.id, { name: e.target.value });
  }

  // Handle any events that occur in normal mode (as an anchor).
  const handleClick = (e) => {
    // I know... it's a last minute feature. Don't judge me.
    const isMobile = window.matchMedia('screen and (max-width: 1024px)').matches;
    if (!categorySetMode) {
      // Normal category select mode, just select the targetted category.
      selectCategory(category.id);
      if (!isMobile) setActiveScreen(1);
    } else {
      // If we are in set mode for a note,
      // Change the selected note's category to this one.
      changeNote(selectedNote, { category: category.id });
      // Reset category set mode.
      setCategorySetMode(false);
      selectCategory(category.id);
      if (!isMobile) setActiveScreen(1);
    }
  }

  const handleMobileClick = (e) => {
    if (!categorySetMode) {
      selectCategory(category.id);
      setActiveScreen(1);
    } else {
      changeNote(selectedNote, { category: category.id });
      setCategorySetMode(false);
      selectCategory(category.id);
      setActiveScreen(1);
    }
  }

  if (category.editMode) {
    return (
      <li className={"category-item edit-mode" + ((selectedCategory === category.id) ? 'selected' : '')}>
        <input
          id={"category-" + category.id}
          ref={categoryRef}
          placeholder="Enter a category title."
          className="feature-input"
          onInput={(e) => handleEdit(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(e) => handleExit(e)}
          value={category.name}
          style={{ borderColor: category.color }}
          />
      </li>
    );
  } else {
    return (
      <li className={"category-item link-mode " + ((categorySetMode === true) ? 'category-set-mode' : '')}>
        <button
          id={"category-" + category.id}
          ref={categoryRef}
          className={"category-button " + ((selectedCategory === category.id) ? 'selected' : '')}
          style={{ color: category.color, borderColor: category.color, backgroundColor: category.color }}
          onClick={(e) => handleClick(e)}>
            {category.name}
        </button>
        <button className="mobile-category-open"
          onClick={(e) => handleMobileClick(e)}
          style={{ color: category.color, borderColor: category.color }}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </li>
    );
  }

};

export default Category;
