// Modify the style of the paragraph text through javascript code
// Clicking on the button the font, font size, and color of the paragraph text will be changed.
const btn = document.querySelector('#jsstyle');
const p = document.querySelector('#text');
btn.addEventListener('click', () => {
  p.textContent = 'Text was changed';
  p.setAttribute('style', 'font-family: Arial, sans-serif; color: blue; font-size: 50px;');
});
