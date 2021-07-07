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
export const insertParamIntoURL = (key: string, value: string) => {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);

    let kvp = window.location.search.substr(1).split('&');
    if (kvp[0] === '') {
        const path = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + key + '=' + value;
        window.history.pushState({ path: path }, '', path);

    } else {
        let i = kvp.length; let x; while (i--) {
            x = kvp[i].split('=');

            if (x[0] === key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }

        if (i < 0) {
            kvp[kvp.length] = [key, value].join('=');
        }

        const refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + kvp.join('&');
        window.history.pushState({ path: refresh }, '', refresh);
    }
}
