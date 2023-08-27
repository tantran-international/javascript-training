// sample Template literals
const a = 10;
const b = `breakline
when use backtick`;

console.log(a);
console.log(b);

// sample comparisons, conditionals, Template literals,length property, $ syntax
if (a === 10) {
  document.write(`Display: a = ${a} <br /> length of b is: ${b.length}`);
} else {
  document.write('error');
}

// extra sample
const result = 18;
const total = `Sum 10 + 8 is ${result}`;
console.log(total);
console.log(`${result < 18 ? 'go to jail' : 'Ok'}`);
