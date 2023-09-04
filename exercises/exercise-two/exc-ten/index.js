/* Write a JavaScript program to calculate sphere volume. */
function sphere() {
  let radius = document.querySelector('#radius').value;
  radius = Math.abs(radius);
  let volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(3);
  document.querySelector('#volume').value = volume;
  return false;
}
window.onload = document.querySelector('#MyForm').onsubmit = sphere;
