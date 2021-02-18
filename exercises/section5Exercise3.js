// Problem: custom findWhere helper

// Solution if the criteria object contains more than one criteria( property )

const findWhere = (array, criteria) => {
  const criteriaKeys = Object.keys(criteria);

  return array.find(element => {
    return criteriaKeys.reduce((isMatchCriteria, key) => {
      if (isMatchCriteria && element[key] && element[key] === criteria[key]) {
        return true;
      }
      return false;
    }, true);
  });
};
