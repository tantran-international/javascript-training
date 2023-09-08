// 1st sample: Find out how they work
localStorage.setItem('name', 'Open inspect -> tab Application -> Local storage "left column"');
localStorage.setItem('age', 26);
localStorage.setItem('job', 'intern');
sessionStorage.setItem('Lover', 'Maria Ozaqua');

console.log(localStorage.getItem('name'));
localStorage.removeItem('job');
// localStorage.clear();





// 2nd sample: apply Local Storage inside the event
const input = document.querySelector('#first-input');
const output = document.querySelector('.output');

output.innerHTML = localStorage.getItem('memory-input');

input.addEventListener('keyup', display);

function display() {
// output.innerHTML = input.value;
	localStorage.setItem('memory-input', input.value);
	output.innerHTML = localStorage.getItem('memory-input');
}

// Clear text when click button
const clearBtn = document.querySelector('.clear-text');
clearBtn.addEventListener('click', deleteText);
function deleteText() {
	localStorage.removeItem('memory-input');
	output.innerHTML = localStorage.getItem('memory-input');
}





// 3th sample: add list-item to list and create clear item button
const dataString = localStorage.getItem('dataList');
var todoList;
const itemInput = document.querySelector('#second-input');
const listOutput = document.querySelector('.output-list');
const addBtn = document.querySelector('.add-items');
const removeBtn = document.querySelector('.remove-items');
const formInput2 = document.querySelector('.demo-input-2');

// Fix bug:  define value of todoList variable (when have data - non data)
if (dataString) {

	todoList = JSON.parse(dataString);
} else {
	todoList = [];
}

// Add Event & create function add items
const addItem = () => {
	// get value of input
	const newItem = itemInput.value;
	// Define what is input value
	console.log(newItem);

	// add to todolist array
	todoList.push(newItem);

	// render view
	render();

	// 1st way to clear input
	/* itemInput.value = ''; */
	// 2nd way: clear all the values of all elements in a form
	formInput2.reset();

	// update data in localStorage after add item, transforms string of items to string of an array
	localStorage.setItem('dataList', JSON.stringify(todoList));
};

addBtn.addEventListener('click', addItem);

// Create function render view
const render = () => {
	const listItem = todoList.map((item) => {
		return `<li> ${item} </li>`;
	});
	listOutput.innerHTML = listItem.join('');
};

// Add Event & Create function remove item by pop() method
const removeItem = () => {
	todoList.pop();
	render();
	// update local storage after remove item
	localStorage.setItem('dataList', JSON.stringify(todoList));
};

removeBtn.addEventListener('click', removeItem);
// render lastest view when reload page
render();
