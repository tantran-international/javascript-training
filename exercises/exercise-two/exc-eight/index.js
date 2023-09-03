/* Write a JavaScript program to remove items from a drop-down list. */
const dropList = document.querySelector('#colorSelect');
function removecolor() {
  dropList.remove(dropList.value);
  /* 2nd way */
  // dropList.remove(dropList.selectedIndex);
  console.log(dropList);
}
