// code example from the promises and fetch section 17, ajax requests with fetch
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(error => console.log('BAD', error))
// only hits catch case if network error happens.
// all other cases (failed status code returned for example) hit then cases.
