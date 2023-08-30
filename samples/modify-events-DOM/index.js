/* create new paragraph */
const para = document.createElement('p');
para.textContent = 'I am Duy Tan Tran';
console.log(para);

/* add list item to the end */
const todoList = document.querySelector('ul');
console.log(todoList);
const newTodo = document.createElement('li');
newTodo.textContent = 'Summer';
todoList.appendChild(newTodo);

/* add list item from the start */
const anotherTodo = document.createElement('li');
anotherTodo.textContent = 'WWow';
todoList.insertBefore(anotherTodo, todoList.firstElementChild);
console.log(anotherTodo);

/* add new paragraph to html */
console.log(document.firstElementChild);
const html = document.firstElementChild;
html.appendChild(para);
para.style.marginLeft = '10px';

/* replace-modify child node */
const modifyTodo = document.createElement('li');
modifyTodo.textContent = 'This is replace Text';
todoList.replaceChild(modifyTodo, todoList.firstElementChild);
modifyTodo.style.fontSize = '50px';

/* remove node */
todoList.removeChild(todoList.children[3]);
todoList.children[0].remove();

/* modify attribute */
const h1 = document.querySelector('h1');
console.log(h1.hasAttribute('style')); // true
console.log(h1.getAttribute('style')); // color: red
h1.setAttribute('style', 'color: blue'); // change text color to blue
h1.removeAttribute('style'); // reset to default color 'black'
h1.setAttribute('style', 'color: pink'); // set text color to pink
h1.style = 'color: orange'; // finally modify attribute: change text color to orange

/* set class  */
h1.className = 'main-heading'; // You can't see the class I assigned to the element directly, but I can access it in CSS
console.log(h1.className); // value off class attribute

/* classList */
h1.classList.add('second-class'); // 	First way to add className
console.log(h1.classList);
console.log(h1.className);
h1.className += ' class1 class2' // Second way to add className
console.log(h1.classList);
