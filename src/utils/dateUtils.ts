import { Timestamp } from "firebase/firestore"

interface ObjectWithModifiedTimestamp {
  modified: Timestamp
  [key: string]: any
}

export function convertTimestampsToDates<T extends ObjectWithModifiedTimestamp>(
  array: T[],
  key: string
) {
  return array.map((item) => ({
    ...item,
    [key]: item[key].toDate()
  }))
}