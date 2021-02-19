// Problem refactor to use default function arguments, remove unused code after
/*
function addOffset(style) {
  if (!style) {
    style = {};
  }

  style.offset = '10px';

  return style;
}
*/
// with spread operator: const addOffset = (style = {}) => ({ ...style, offset: '10px' });
// Solution
const addOffset = (style = {}) => {
  style.offset = '10px';

  return style;
};
