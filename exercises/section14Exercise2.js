/* Problem: Convert the array of arrays into an array of object.
Each object should contain the name of the class( subject ),
name of the teacher ( teacher ),
and the time that it starts ( time ).
*/
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];
// Solution
const classesAsObject = classes.map(([subject, time, teacher]) =>
  ({ subject, time, teacher }));
