import { SORT_BY_ASCENDING, SORT_BY_DESCENDING } from "./constants";

export const sortByAscending = (randomNumbers) => ({
  type: SORT_BY_ASCENDING,
  randomNumbers
})

export const sortByDescending = (randomNumbers) => ({
  type: SORT_BY_DESCENDING,
  randomNumbers
})
