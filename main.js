// Used Quokka.js for this file
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

// map helper, most widely used helper

numbers = [1,2,3];
var doubledNumbers = [];

for (var i = 0; i <numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
};

doubledNumbers

var doubled = numbers.map(number => number * 2); //?

var cars = [
  { model: 'Buick', price: 'CHEAP'},
  { model: 'Camaro', price: 'EXPENSIVE'},
];

// this operation is called plucking
var prices = cars.map(car => car.price); //?
// filter helper
var products = [
  { name: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fruit'},
  { name: 'celery', type: 'vegetable'},
  { name: 'orange', type: 'fruit'},
];

var fruits = products.filter(product => product.type === 'fruit') //?
// more filtering
products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
  { name: 'banana', type: 'fruit', quantity: 10, price: 15},
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9},
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

var filteredProducts = products.filter(product =>
  product.type === 'vegetable'
  && product.quantity > 0
  && product.price < 10
) //?

// choosing when to filter
var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
];

const commentsForPosts = (post, comments) => (
  comments.filter(comment => comment.postId === post.id)
);
commentsForPosts(post,comments) //?
