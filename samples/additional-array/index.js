/* difference ways to create an array */
const array1 = [1, 2, 3, 4, 5];
const array2 = new Array('six', 'seven', 'eight', 'nine', 'ten');


console.log(array1);
console.log(array2);


/* finding the length of an array */
console.log(array1.length);


/* Accessing and modifying array items */
array1[0] = 'one';
array1[4] = 'five';
console.log(array1);


/* multidimensional array */
const array3 = ['Honda', 1000, ['a', 'b', 'c'], ['d', 'e', 'f']];
console.log(`${array3[2][2]} and ${array3[3][0]}`);
// display: c and d


/* find, add, remove, accessing, converting */
console.log(array1.indexOf('five'));
const newLength = array1.push(5.5);
console.log(array1);
console.log(newLength);

/* remove 2 items from index 2 (remove number 3 & 4 in array) */
array1.splice(2, 2);
console.log(array1);

/* remove 2 items from index 0, and add 4 number from the start of array */
array1.splice(0, 2, 1, 2, 3, 4);
console.log(array1);
// remove 1, 2 and add 1, 2, 3, 4 from the start
