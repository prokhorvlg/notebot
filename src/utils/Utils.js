// ** UTILS
// Generates a new id number based on the last value found in the array plus one.
export const generateId = (arrayOfObjects) => {
  if (arrayOfObjects.length > 0) {
    return parseInt(arrayOfObjects[arrayOfObjects.length - 1].id) + 1;
  } else {
    return 0;
  }
}
// Generates a random hex code from a list.
export const generateColor = () => {
  const colors = ["#91aaff", "#ff9e9e", "#ff80c5", "#7afbff", "#8aff9c"];
  return colors[Math.floor(Math.random()*colors.length)];
}
// Finds the object with the given id within the array.
export const findObjectInArray = (id, arrayOfObjects) => {
  return arrayOfObjects.find(object => object.id === id);
}
// Finds the position of the object with the given id within the array.
export const findPositionInArray = (id, arrayOfObjects) => {
  return arrayOfObjects.map(function(object) {return object.id; }).indexOf(id);
}

// Color conversion functions.
/*
export const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    "r": parseInt(result[1], 16),
    "g": parseInt(result[2], 16),
    "b": parseInt(result[3], 16)
  } : null;
}
export const rgbToHsv = (rgb) => {
  var r = rgb.r, g = rgb.g, b = rgb.b;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max;

  var d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return [ h, s, v ];
}*/
