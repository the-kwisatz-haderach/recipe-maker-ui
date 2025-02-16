export const waitFor = (duration = 0) =>
  new Promise((resolve) => setTimeout(resolve, duration))
