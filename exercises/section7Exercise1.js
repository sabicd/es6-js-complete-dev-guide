// Problem add up the total number of distances
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

// Solution
const totalDistance = trips.reduce((acc,trip) => acc += trip.distance, 0);
