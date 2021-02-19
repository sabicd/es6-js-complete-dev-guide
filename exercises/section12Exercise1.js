// Problem: Refactor this to use default arguments
/*
function sum(a, b) {
  if (a === undefined) {
    a = 0;
  }

  if (b === undefined) {
    b = 0;
  }

  return a + b;
}
*/
const sum = (a = 0, b = 0) => a + b;
