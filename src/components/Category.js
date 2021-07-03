import React, { useRef, useEffect } from 'react';

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import OutsideClickHandler from 'react-outside-click-handler';

const Category = ({category, changeCategory, deleteCategory, selectCategory}) => {

  // Make sure that the input element is focused when the category is in edit mode.
  const categoryRef = useRef(null);
  useEffect(() => {
    if (category.editMode) {
      categoryRef.current.focus();
    }
  }, [category.editMode]);

  // Handle color changes for the Category.
  const [color, setColor] = useColor("hex", category.color);
  // On app load, set the color to match the app state.
  // On color picker update, set app state to reflect color.
  useEffect(() => {
    console.log(color);
    changeCategory(category.id, { color: color.hex });
  }, [color]);

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

  // Handle the user clicking outside of the color picker, effectively ending the selection.
  const handleOutsideColorClick = (e) => {
    changeCategory(category.id, { editColorMode: false });
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
      <li className="category-item-linkMode">
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
      <li className="category-item-linkMode">
        <a
          id={"category-" + category.id}
          ref={categoryRef}
          className={selectedClass}
          style={{ color: category.color, borderColor: category.color, backgroundColor: category.color }}
          href="#"
          onClick={(e) => handleClick(e)}>
            {category.name}
        </a>
        {category.editColorMode > 0 &&
          <OutsideClickHandler
            onOutsideClick={handleOutsideColorClick}>
            <div className="category-colorPicker">
              <ColorPicker width={300} height={100} color={color} onChange={setColor} hideHSV hideRGB hideHEX dark />
            </div>
        </OutsideClickHandler>
        }
      </li>
    );
  }

};

export default Category;
