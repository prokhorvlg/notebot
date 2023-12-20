interface ObjectWithId {
  id: string
  [key: string]: any
}

// Returns an object with matching id within array.
export function findObjectInArray<T extends ObjectWithId>(
  id: string,
  arrayOfObjects: T[]
): T | null {
  const result = arrayOfObjects.find((object) => object.id === id)
  return result ?? null
}

// Finds the position of the object with the given id within the array.
export const findPositionInArray = (id: string, arrayOfObjects: any[]) => {
  return arrayOfObjects
    .map(function (object) {
      return object.id
    })
    .indexOf(id)
}