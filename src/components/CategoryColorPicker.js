import React, { useEffect } from 'react';

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import OutsideClickHandler from 'react-outside-click-handler';

const CategoryColorPicker = ({editColorMode, setEditColorMode, selectedCategory, selectedCategoryColor, setSelectedCategoryColor, changeCategory}) => {

  // Handle color changes for the Category.
  // On app load, set the color to match the app state.
  const [color, setColor] = useColor("hex", selectedCategoryColor);

  // On color picker update, set app state to reflect color.
  useEffect(() => {
    if (selectedCategory !== -1) {
      changeCategory(selectedCategory, { color: color.hex });
      //setSelectedCategoryColor(color.hex);
    }
  }, [color]);

  // Handle the user clicking outside of the color picker, effectively ending the selection.
  const handleOutsideColorClick = (e) => {
    setEditColorMode(false);
  }

  return (
    <OutsideClickHandler
      onOutsideClick={handleOutsideColorClick}>
        <div className={"category-colorPicker " + ((editColorMode === true) ? 'showing' : 'not-showing')}>
          <ColorPicker width={250} height={100} color={color} onChange={setColor} hideHSV hideRGB hideHEX dark />
        </div>
    </OutsideClickHandler>
  );
};

export default CategoryColorPicker;
