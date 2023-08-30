const button = document.getElementById('changeBackground');
button.addEventListener('click', () => {
  document.body.style.backgroundColor = 'cyan';
});

const demoClass = document.getElementsByClassName('demo-class');
console.log(demoClass);
for (i = 0; i < demoClass.length; i++) {
  demoClass[i].style.color = 'red';
}

const demoQuery = document.querySelectorAll('.demo-query-all');
console.log(demoQuery);
demoQuery.forEach((abc) => {
  abc.style.color = 'green';
});

/* getElementByTagName method */
const collection = document.getElementsByTagName('li');
console.log(collection);
let text = ' ';
for (i = 0; i < collection.length; i++) {
  text += collection[i].innerHTML + '<br>';
}
document.getElementById('demo').innerHTML = text;

/* parentNode parentElement property */
const z = document.getElementsByClassName('demo-class')[0];
console.log(z.parentNode); // body
console.log(z.parentNode.parentNode); // html
console.log(z.parentNode.parentNode.parentNode); // #document
console.log(z.parentNode.parentNode.parentNode.parentNode); // null

console.log(z.parentElement); // body
console.log(z.parentElement.parentElement); // html
console.log(z.parentElement.parentElement.parentElement); // null

/* childNodes */
console.log(document.getElementsByTagName('li')[0].parentNode);
console.log(document.getElementsByTagName('ul')[0].childNodes); // get a NodeList

/* children */
console.log(document.getElementsByTagName('ul')[0].children); // get a HTMLCollection

console.log(document.getElementsByTagName('ul')[0].firstElementChild);

console.log(document.getElementsByTagName('ul')[0].lastElementChild);

const u = document.getElementsByTagName('ul')[0];
u.firstElementChild.style.color = 'red';
u.lastElementChild.style.color = 'blue';

document.getElementsByTagName('ul')[0].nextElementSibling.style.fontSize = '50px';
document.getElementsByTagName('ul')[0].previousElementSibling.style.fontSize = '50px';

collection[1].nextSibling.style.fontSize = '50px';
collection[1].previousSibling.style.fontSize = '50px';
