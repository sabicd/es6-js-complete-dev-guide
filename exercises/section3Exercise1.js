// Problem: return height of each image in a new array
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];
// Solution

var heights = images.map(image => image.height);
