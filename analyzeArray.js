export default function analyzeArray(arr) {
  if (!Array.isArray(arr) || !arr.length) return null;

  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
}

function getAverage(array) {
  let sum = array.reduce((prev, cur) => prev + cur, 0);
  return Math.floor(sum / array.length);
}

function getMin(array) {
  let min = array[0];
  array.forEach((el) => {
    if (el <= min) min = el;
  });
  return min;
}

function getMax(array) {
  let max = array[0];
  array.forEach((el) => {
    if (el >= max) max = el;
  });
  return max;
}
