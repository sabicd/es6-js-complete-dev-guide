// Problem: refactor this function to use the spread operator
/*
function join(array1, array2) {
  return array1.concat(array2);
}
*/
// Solution
const join = (array1, array2) => [...array1, ...array2];
