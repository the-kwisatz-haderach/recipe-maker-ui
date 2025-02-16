export const createRandomNumberGenerator =
  (min = 0, max = 1) =>
  () =>
    min + Math.floor(Math.random() * max)
