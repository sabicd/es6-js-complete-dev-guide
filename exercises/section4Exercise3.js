// Problem: Create a function called reject. Reject should work in the opposite way of filter. If a function returns true, the item should not be included in the new Array.
//Solution
function reject(array, iteratorFunction) {
  return array.filter(element => !iteratorFunction(element));
}
