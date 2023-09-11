/* Write a JavaScript function to add rows to a table. */
const table = document.querySelector('#sampleTable');
console.log(table);
function insert_Row() {
  const newRow = table.insertRow();
  const insertCell1 = newRow.insertCell(0);
  const insertCell2 = newRow.insertCell(1);
  insertCell1.textContent = 'Cell-01';
  insertCell2.textContent = 'Cell-02';
}
