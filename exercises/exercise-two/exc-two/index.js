/* Write a JavaScript function to get the values of First and Last names of the following form. */
const form = document.querySelector('#form1');

function getFormvalue() {
  for (i = 0; i < form.length; i++) {
    if (form[i].value != 'Submit') {
      console.log(form[i].value);
      alert(form[i].value);
    }
  }
}
