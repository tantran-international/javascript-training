/* An array can hold any value, even value of different types
But it is recommended to use the same type*/
const array = [0, 'one', 2, 3];
console.log(array);

console.log(array.length);
// display length: 4

console.log(array[1]);
// display index number 1 in array: one

/* If you assign a smaller number, the array is cut at that position: */
array.length = 2;
console.log(array);

/* Add items to an array */
array.push(4, 5, 6);
console.log(array);

/* Add from beginning */
array.unshift(-2, -1);
console.log(array);

/* Remove from beginning */
const shifted = array.shift();
console.log(array);
console.log('Removed this element:', shifted);

/* Remove item  from the end */
const poped = array.pop();
console.log(array);
console.log('Removed this element:', poped);

/* join two arrays with spread operator */
const a = [1, 2];
const b = [3, 4];
a.unshift(-20, -10);
b.push(50, 60);
const c = [...a, ...b];
console.log(c);
// display: [-20, -10, 1, 2, 3, 4, 50, 60]

/* find, findIndex, include */
console.log(c.includes(-21));
// display: false

console.log(c.includes(50, 5));
// display: true because c contains 50 after index c[5]

/* Loop */
for (x = 0; x <= 10; x++) {
  console.log(x);
  document.write(`${x} `);
}
// display: 0 1 2 ... 10

for (const value of c) {
  console.log(value);
}


let y = 10;
do {
  console.log(y);
  y--;
} while (y >= 0);
// display: 10 9 8 ... 0

let i = 0;
while (i >= 0) {
  console.log(i);
  i++;
  if (i > 15) {
    break;
  }
}
// display: 0 1 2 ... 15
