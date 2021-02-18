// Problem: create new array that contains the distance / time value from each trip
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

// Solution
var speeds = trips.map(({distance, time}) => distance / time);
