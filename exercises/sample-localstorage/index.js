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
const clearBtn = document.querySelector('button');
clearBtn.addEventListener('click', deleteText);
function deleteText() {
	localStorage.clear();
	output.innerHTML = localStorage.getItem('memory-input');
}


// 3th sample: add list-item to list and create clear item button
let todoList = [];
const listInput = document.querySelector('#second-input');
const listOutput = document.querySelector('.output-list');
const addBtn = document.querySelector('.add-items');
const removeBtn = document.querySelector('.remove-items');

