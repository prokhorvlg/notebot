import React, { useEffect, useState } from 'react';

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

import { HexColorPicker } from "react-colorful";
import { useDebouncedCallback } from 'use-debounce';
import OutsideClickHandler from 'react-outside-click-handler';

const CategoryColorPicker = ({editColorMode, setEditColorMode, selectedCategory, selectedCategoryColor, setSelectedCategoryColor, changeCategory}) => {

  // Handle color changes for the Category.
  // On app load, set the color to match the app state.
  const [value, setValue] = useState(selectedCategoryColor);

  // On color picker update, set app state to reflect color.
  const debounced = useDebouncedCallback((value) => {
    if (selectedCategory !== -1) {
      setValue(value);
      changeCategory(selectedCategory, { color: value });
    }
  }, 200);

  // Make sure the color pickers default value is udpated whenever the category color changes.
  useEffect(() => {
    if (selectedCategory !== -1) {
      setValue(selectedCategoryColor);
    }
  }, [selectedCategoryColor]);

  // Handle the user clicking outside of the color picker, effectively ending the selection.
  const handleOutsideColorClick = (e) => {
    setEditColorMode(false);
  }

  return (
    <OutsideClickHandler
      onOutsideClick={handleOutsideColorClick}>
        <div className={"category-colorPicker " + ((editColorMode === true) ? 'showing' : 'not-showing')}>
          <HexColorPicker color={value} onChange={(e) => debounced(e)} />
        </div>
    </OutsideClickHandler>
  );
};

export default CategoryColorPicker;
