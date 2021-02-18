// Problem: create a function that implements pluck logic

//Solution
function pluck(array, property) {
  return array.map(element => element[property])
}
