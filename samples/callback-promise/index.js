/* callback */
let sum = (a, b, callback) => {
  const total = a + b;
  callback(total);
}

let printSum = (message) => {
  console.log('Check sum 9 + 10 = ', message);
}

sum(9, 10, printSum);
// dipsplay: Check sum 9 + 10 = 19

/* promise */
const promise = new Promise(function(resolve, reject) {
    resolve();
  })

promise
  .then(function() {
    console.log('Success');
  })

  .catch(function() {
    console.log('Fail');
  })

  .finally(function() {
    console.log('Complete');
  });
