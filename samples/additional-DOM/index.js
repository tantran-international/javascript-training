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
