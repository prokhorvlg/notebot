import React, { useRef, useEffect } from 'react';

const Category = ({category, changeCategory, deleteCategory, selectCategory}) => {

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
    selectCategory(category.id);
  }

  // Append a selected class if this category is selected.
  let selectedClass;
  if (category.selected) {
    selectedClass = " selected";
  } else {
    selectedClass = "";
  }

  if (category.editMode) {
    return (
      <li>
        <input
          id={"category-" + category.id}
          ref={categoryRef}
          placeholder="Enter a category title."
          onInput={(e) => handleEdit(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(e) => handleExit(e)}
          value={category.name}
          />
      </li>
    );
  } else {
    return (
      <li>
        <a
          id={"category-" + category.id}
          ref={categoryRef}
          class={selectedClass}
          href="#"
          onClick={(e) => handleClick(e)}>
            {category.name}
        </a>
      </li>
    );
  }

};

export default Category;
