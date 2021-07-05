import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faFill, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

// CategoryEditControls: contains a list of controls for editing the currently selected category.
const CategoryEditControls = ({selectedCategory, selectedCategoryColor, changeCategory, deleteCategory, editColorMode, setEditColorMode}) => {

  // Handles click of edit category title click.
  const editCategoryTitleClick = (e) => {
    e.preventDefault();
    // Set the target category into edit mode, unless it is the all category.
    if (selectedCategory !== -1) {
      changeCategory(selectedCategory, { editMode: true });
    }
  }

  // Handles click of edit color category.
  const editCategoryColorClick = (e) => {
    e.preventDefault();
    // Set the target category into edit mode, unless it is the all category.
    if (selectedCategory !== -1) {
      changeCategory(selectedCategory, { editMode: false });
      if (editColorMode === true) {
        console.log("Set")
        setEditColorMode(false);
      } else {
        setEditColorMode(true);
      }
    }
  }

  // Handles click of delete category.
  const deleteCategoryClick = (e) => {
    e.preventDefault();
    // Delete the currently selected category, unless it is the all category.
    if (selectedCategory !== -1) {
      deleteCategory(selectedCategory);
    }
  }

  return (
    <div style={{ borderColor: selectedCategoryColor }} className={"main-categories-controls " + ((selectedCategory !== -1) ? 'showing' : 'not-showing')}>
      <a href="#" onClick={editCategoryTitleClick}>
        <FontAwesomeIcon icon={faEdit} color={selectedCategoryColor} className="fa-link-icon" fixedWidth  />
        Edit title
      </a>
      <a href="#" onClick={editCategoryColorClick}>
        <FontAwesomeIcon icon={faFill} color={selectedCategoryColor} className="fa-link-icon" fixedWidth  />
        Edit color
      </a>
      <a href="#" onClick={deleteCategoryClick}>
        <FontAwesomeIcon icon={faTrashAlt} color={selectedCategoryColor} className="fa-link-icon" fixedWidth  />
        Delete category
      </a>
    </div>
  );

};

export default CategoryEditControls;
