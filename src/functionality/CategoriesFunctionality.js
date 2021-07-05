import React, { useState } from 'react';

// Utilities
import { generateId, generateColor, findObjectInArray, findPositionInArray } from "../utils/Utils";

// ** CATEGORIES
const useCategories = (initialCategories) => {
  // Stores the currently selected category that is highlighted and who's notes are being displayed.
  const [selectedCategory, setSelectedCategory] = useState(-1);

  // Stores the categories associated with the user.
  const [categories, setCategories] = useState(initialCategories);

  // Set the theme color of the category editor box and its contents.
  const [selectedCategoryColor, setSelectedCategoryColor] = useState("#ffffff");
  React.useEffect(() => {
    if (selectedCategory !== -1) {
      setSelectedCategoryColor(findObjectInArray(selectedCategory, categories).color);
    }
  }, [selectedCategory, categories]);

  // Trigger the process to add a new category.
  const addCategory = () => {
    createEmptyCategory();
  }

  // Create a new empty category (a bucket for notes).
  const createEmptyCategory = () => {
    const newId = generateId(categories);
    const newColor = generateColor();
    const emptyCategory = {
      id: newId,
      name: '',
      color: newColor, // replace with random bright color
      editMode: true,
      selected: false
    };
    setCategories(categories  => [...categories, emptyCategory]);
    return newId;
  }

  // Change category to the details provided in the input object.
  // Expect input object to look like { key: newValue, ... }
  const changeCategory = (id, newProperties) => {
    // Find the object with the relevant id.
    const originalCategory = findObjectInArray(id, categories);
    // Replace any values within it with the submitted properties.
    const newCategory = Object.assign(originalCategory, newProperties);

    // Construct a new array to replace the state.
    const newCategories = [...categories];
    const categoryPosition = findPositionInArray(id, categories);
    newCategories[categoryPosition] = newCategory;
    setCategories(newCategories);
  }

  // Causes the category with the given id to be set to selected within the state.
  const selectCategory = (id) => {
    // Find the old selected category and make its selected property false.
    if (selectedCategory !== -1) {
      changeCategory(selectedCategory, { selected: false });
    }

    // Set the id of the selected category.
    setSelectedCategory(id);

    if (id === -1) {
      // If we are selecting the all category, which is not a true category...
      // Don't change any categories.
    } else {
      // If we are selecting a normal category...
      // Find the object and set its selected to true.
      changeCategory(id, { selected: true });
    }
  }

  // Deletes a category based on id.
  const deleteCategory = (id) => {
    // There must be at least 1 category to create notes into.
    if (categories.length !== 1) {
      // Create new categories array with the object removed.
      let newCategories = [...categories];
      const categoryPosition = findPositionInArray(id, categories);
      newCategories.splice(categoryPosition, 1);
      setCategories(newCategories);

      // Reset selected category to "all".
      setSelectedCategory(-1);
    }
  }

  return [
      selectedCategory,
      setSelectedCategory,
      categories,
      selectedCategoryColor,
      setSelectedCategoryColor,
      addCategory,
      changeCategory,
      selectCategory,
      deleteCategory
    ];
}

export default useCategories;
