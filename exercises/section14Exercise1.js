// Problem: Refactor the code to reduce the code size with the help of destructuring
/*
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}
*/
// Solution

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

const isEngineer = ({ title, department }) => title === 'Engineer'
  && department === 'Engineering';
