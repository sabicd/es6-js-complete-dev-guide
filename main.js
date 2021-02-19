// Used Quokka.js for this file
// Array helper methods forEach, map, filter, find, every, some, reduce
// These helper methods were previously part of various packages, but initially drafted into ES6

var colors = ['red', 'blue', 'green'];

// bad example
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// good example (parameter is an iterator function)
colors.forEach(function (color) {
  console.log(color);
})

// forEach continued
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create iterator function outside to add up the numbers in the array
const adder = number => sum += number;
// Create a variable to hold the sum
var sum = 0;
// Loop over the array, pass in the iterator function
numbers.forEach(adder);
// print the sum variables
console.log(sum);

// map helper, most widely used helper

numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
};

doubledNumbers

var doubled = numbers.map(number => number * 2); //?

var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'EXPENSIVE' },
];

// this operation is called plucking
var prices = cars.map(car => car.price); //?
// filter helper
var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];

var fruits = products.filter(product => product.type === 'fruit') //?
// more filtering
products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
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
commentsForPosts(post, comments) //?

// find helper, search the array for a specific element, as soon as it is found, it will be returned (only the element, not an array)

users = [
  { name: 'Alex' },
  { name: 'Jill' },
  { name: 'Bill' },
]

const user = users.find(user => user.name === 'Alex') //?

const Car = function (model) {
  this.model = model;
}
var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus'),
]
cars.find(car => car.model === 'Focus') //?

posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' },
];
const comment = { postId: 1, content: 'Great Post' };

const postForComment = (posts, comment) => posts.find(post => post.id === comment.postId);
postForComment(posts, comment); //?

// Using find to search for users

// every and some
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];
const computersCanRunProgram = computers.every(computer => computer.ram > 16) //?

const someComputersCanRunProgram = computers.some(computer => computer.ram > 16) //?

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
}
const username = new Field('2cool')//?
const password = new Field('password1')//?
const birthDate = new Field('10/10/2010')//?

username.validate()//?

const fields = [username, password, birthDate];

fields.every(field => field.validate())//?

//reduce helper

numbers = [10, 20, 30,];

const sumReduce = numbers.reduce((sum, number) => sum += number, 0); //?

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
];
primaryColors.reduce((acc, color) => [...acc, color.color], []); //?

// Ace next interview with reduce
function balancedParens(string) {
  return !string.split('').reduce((previous, char) => {
    if (previous < 0) return previous;
    if (char === '(') return ++previous;
    if (char === ')') return --previous;
    return previous;
  }, 0);
}

balancedParens('(()))('); //?

//Variable declarations with const and let
var color = 'red';
color;

//var name = 'Jane';
//var title = 'Software Engineer';
//var hourlyWage = 40;
// ES6
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

// What const and let solve

function count(targetString) {
  const characters = ['a', 'e', 'i'];
  let number = 0;
  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) number++;
  }
  return number;
}
count('aexiaa') //?

// Template Literals/Strings
const getMessage = () => `The year is ${new Date().getFullYear()}`;

getMessage(); //?

// When to reach for template strings
const device_id = 4;
const guid = 20;
const usernameDetail = 'hello';

const data = '{"device_id:"' + device_id + '","guid":"' + guid + '","usernameDetail":"' + usernameDetail + '","}'; //?

const dataES6 = `{"device_id":"${device_id}","guid:"${guid},"usernameDetail":"${usernameDetail}","}`; //?

const year = 2016;
const yearMessage = year; //?
// Arrow functions
const add = (a, b) => a + b;

add(1, 2);

// Advanced usage of arrow functions

const double = number => 2 * number;
double(2); //?

numbers = [1, 2, 3];
numbers.map(number => number * 2); //?

// When to use arrow functions

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'SuperSquad',
  teamSummary: function () {
    return this.members.map(member => `${member} - ${this.teamName}`)
  }
}
team.teamSummary();//?
// Enhanced Object Literals
function createBookshop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((sum, item) => sum += item.price, 0);
    },
    priceForTitle(title) {
      const bookWithTheTitle = this.inventory.find(element => element.title === title);
      return bookWithTheTitle ? bookWithTheTitle.price : 'NOT FOUND';
    }
  }
}

const inventory = [
  { title: 'Harry Potter I', price: 10 },
  { title: 'Eloquent Javascript', price: 15 },
  { title: 'Harry Potter II', price: 15 },

]
const bookshop = createBookshop(inventory);
bookshop.inventoryValue(); //?
bookshop.priceForTitle('Harry Potter III') //?
// Default function arguments

function makeAjaxRequest(url, method = 'GET') {
  /* no more if checks needed to define a default value for an argument
  if (!method) {
    method = 'GET';
  }
  */
  //logic to make the request
}
// Use cases of defaulting arguments
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.floor(Math.random() * 9999);
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}
createAdminUser(); //?

// Rest and spread operator
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum += number, 0);
}

addNumbers(1, 2, 3, 4, 5);//?

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];
[...fallColors, 'blue', ...defaultColors, ...userFavoriteColors];//?

function validateShoppingList(...elements) {
  if (!elements.includes('milk')) {
    return ['milk', ...elements];
  }
  return elements;
}

validateShoppingList('oranges', 'bread');//?

const MathLib = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
}
// Destructuring
// es5
/*
var expense = {
  type: 'Business',
  amount: '$45 USD',
};

var type = expense.type;
var amount = expense.amount;
*/
// es6
const expense = {
  type: 'Business',
  amount: '$45 USD',
};

const { type, amount } = expense; //?

// Destructuring Arguments Object
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040,
};

function fileSummary({ extension, name, size }, { color = 'red' }) {
  return `${color} The file ${name}.${extension} is of size ${size}`
}

fileSummary(savedFile, { color: 'red' }); //?

// Destructuring arrays
const companies = [
  'Google',
  'Facebook',
  'Uber',
]

const [techCompanyName, ...restOfTechCompanies] = companies; //?
techCompanyName//?
typeof techCompanyName;//?
restOfTechCompanies//?

const companiesWithInfo = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' },
];
const [{ location: locationOfGoogle }, ...restOfTechCompaniesWithInfo] = companiesWithInfo;

locationOfGoogle;//?

const Google = {
  locations: ['Mountain View', 'New York', 'London']
}
const { locations: [firstLocationOfGoogle] } = Google;

firstLocationOfGoogle;//?

// When to use destructuring?

function signup({ username, password, email, dateOfBirth, city }) {
  //create new user
}
const userToSignUp = {
  username: 'myname',
  password: 'mypassword',
  email: 'email',
  dateOfBirth: '1/1/1990',
  city: 'New York',
};

signup(userToSignUp);

// More on when to use destructuring

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];
/* make it look like this
[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 },
]
*/
points.map(([x, y]) => ({ x, y }))//?

// Intro to Classes
/* es5
function Vehicle(options) {
  this.title = options.title;

}


const vehicle = new Vehicle({ title: 'Focus' });//?
vehicle.drive();//?


function Toyota(options) {
  Vehicle.call(this, options);
  this.color = options.color;
}
Toyota.prototype = Object.create(Vehicle.prototype);
Toyota.prototype.drive = function(){
  return 'vroom';
}
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function () {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: "Daily Driver" });
toyota;//?
toyota.drive()//?
toyota.honk();//?
*/
// ES6 classes
class Vehicle {
  constructor(options) {
    this.title = options.title;
  }
  drive() {
    return 'vroom';
  }
}
class Toyota extends Vehicle {
  constructor({ color, title }) {
    super({ title });
    this.color = color;
  }
  honk(){
    return 'beep';
  }
}
const toyota = new Toyota({color: 'red', title: 'Daily Driver' });//?
toyota.honk();//?
toyota.drive();//?
// for of loop
for (let color of colors) {
  color //?
}

// generators
 function* shopping(){
   // stuff on the sidewalk
   // walking down the sidewalk
   // go into the store with cash
  const stuffFromStore = yield 'cash';
  // have stuff going to laundry
  const stuffFromLaundry = yield 'laundry';
  // walking back home with stuff and clean clothes
  // arrived home
  return [stuffFromStore, stuffFromLaundry];
 }
// stuff in the store;
const gen = shopping();//?
gen.next(); //leaving our house
//walked into the store
//purchase our stuff
gen.next('groceries');//?
//have groceries going for stuff from laundry
gen.next('clean clothes');//?
// have everything at home

function* colorsGen() {
  yield 'red';
  yield 'blue';
  yield 'green';
}
const genColors = colorsGen();

const myColors = [];
for (let colorFromGen of colorsGen()) {
  myColors.push(colorFromGen);
}

myColors;//?

// es6 symbol iterator teaches objects how to respond to for of loops
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead,
    yield this.tester
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* testingTeam;
  }
};


function* TestingTeamIterator(testingTeam) {
  yield testingTeam.lead;
  yield testingTeam.tester;
}

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield* team.testingTeam;
}
let teamMembers = [];

for (let name of engineeringTeam){
  teamMembers.push(name);
}
teamMembers;//?

// Generators with recursion
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    for ( let child of this.children) {
      yield* child;
    }
  }
}
const children = [
  new Comment('good comment', []),
  new Comment('meh', []),
  new Comment('bad comment', []),
]

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
  values.push(value);
}
values;//?
