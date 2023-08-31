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
h1.className += ' class1 class2'; // Second way to add className
console.log(h1.classList);

/* event handler attribute */
const p = document.querySelector('p');

function changeTextColor() {
  p.style.color = 'red';
}

/* event handler properties */
const btn = document.querySelector('button');

const changeText = () => {
  p.textContent = 'This Text is changed';
};

btn.ondblclick = changeText;

/* event listener */
btn.addEventListener('mouseenter', () => {
  p.style.color = 'green';
});

/* last demo */
// Test the key and code properties display in console
document.addEventListener('keypress', (event) => {
  console.log('key: ' + event.key);
  console.log('code: ' + event.code);
});

/* event objects */
document.addEventListener('keydown', (e) => {
	const element = document.querySelector('.test');
	element.style.border = '1px solid red';
	element.style.width = 'fit-content';
	const a = 'KeyA';
	const s = 'KeyS';
	const d = 'KeyD';
	const w = 'KeyW';

	switch (e.code) {
		case a:
			element.textContent = '<-';
			break;
		case s:
			element.textContent = 'Down';
			break;
		case d:
			element.textContent = '->';
			break;
		case w:
			element.textContent = 'Up';
			break;
	}
});

/* console log target when user click on it */
const ul = document.querySelector('ul');
ul.addEventListener('click', (abc) => {
  console.log(abc.target);
});
