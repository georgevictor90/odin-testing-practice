const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return Math.round((a / b) * 1e2) / 1e2;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

export default calculator;
