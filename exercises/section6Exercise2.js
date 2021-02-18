// Problem: find out if any requests has a status of pending
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];
// solution
const inProgress = requests.some(request => request.status === 'pending');
