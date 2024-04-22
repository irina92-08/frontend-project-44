/* eslint-disable import/prefer-default-export */
export const getRandomInRange = (min = 0, max = 100) => {
  const rangeRandom = min + Math.random() * (max - min + 1);
  return Math.floor(rangeRandom);
};
