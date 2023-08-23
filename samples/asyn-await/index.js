const todo = async () => {
  const promise = new Promise((resolve, reject) => {
    resolve('success');
  });

  const response = await promise;
  console.log(response);
};

todo();

/* await two promises. */
async function foo() {
  const result1 = await new Promise((resolve) => {
    setTimeout(() => {resolve('Congratulation 1st');}, 1000);});
    console.log(result1);

  const result2 = await new Promise((resolve) => {
    setTimeout(() => {resolve('Congratulation 2nd');}, 2000);});
    console.log(result2);
}
foo();
