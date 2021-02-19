// Problem: Refactor to use enhanced object literal notation
/*
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width: width,
    height: height
  };
}
*/
// Solution
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width,
    height
  };
}
