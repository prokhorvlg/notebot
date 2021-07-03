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
