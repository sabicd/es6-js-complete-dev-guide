// Array helper methods forEach, map, filter, find, every, some, reduce
// These helper methods were previously part of various packages, but initially drafted into ES6

var colors = [ 'red', 'blue', 'green'];

// bad example
for (var i =0; i<colors.length; i++) {
  console.log(colors[i]);
}

// good example (parameter is an iterator function)
colors.forEach(function(color){
  console.log(color);
})

// forEach continued
// Create an array of numbers
var numbers = [1,2,3,4,5];

// Create iterator function outside to add up the numbers in the array
const adder = number => sum += number;
// Create a variable to hold the sum
var sum = 0;
// Loop over the array, pass in the iterator function
numbers.forEach(adder);
// print the sum variables
console.log(sum);
