/* Write a JavaScript program to set paragraph background color. */
const bodyElement = document.querySelectorAll('p');
console.log(bodyElement);
function set_background() {
  bodyElement[0].style.background = 'red';
  bodyElement[1].style.background = 'blue';
} 
