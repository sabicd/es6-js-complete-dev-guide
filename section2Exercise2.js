// Problem: calculate the areas of the images. Store it inside the areas array.
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

// Solution
images.forEach(function(image){
    areas.push(image.height * image.width);
})
