// Problem: create function named unique to return only a list with unique values (same value only occurs once in the list)
function unique(numbers) {
  return numbers.reduce((acc, numberToSearchFor) => {
    if(!acc.find(number => number === numberToSearchFor)) return [...acc, numberToSearchFor];
    return acc;
  },[]);
}
unique([1,2,2,3,3,4,4,5,5,5,5,6,6]) //?
