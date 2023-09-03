/* Write a JavaScript program to count and display dropdown list items in an alert window. */
const dropList = document.querySelector('#mySelect');
let txt = `Number of items: ${dropList.length}`;
function getOptions() {
  for (i = 0; i < dropList.length; i++) {
    txt = txt + '\n' + dropList.options[i].text;
  }
  alert(txt);
}
