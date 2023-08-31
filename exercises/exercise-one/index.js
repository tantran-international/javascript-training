/* Change the body style so it has a font-family of "Arial, sans-serif". */
document.body.style.fontFamily = 'Arial, sans-serif';
console.log(document.body);

/* Replace each of the spans (nickname, favorites, hometown) with your own information. */
document.querySelector('#nickname').textContent = 'Call me Kim Hyun Joong';
document.querySelector('#favorites').textContent = 'Code, marathon, read, and study';
document.querySelector('#hometown').textContent = 'Vinh Long';

/* Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red. */
const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
  item.className = 'listitem';
});

/* Create a new img element and set its src attribute to a picture of you. Append that element to the page. */
const firstImage = document.createElement('img');
firstImage.setAttribute('src', 'https://1409791524.rsc.cdn77.org/data/images/full/626777/where-is-kim-hyun-joong-now-idol-actors-status-in-2022-following-hiatus.jpg');
document.body.appendChild(firstImage);
