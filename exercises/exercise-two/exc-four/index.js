/* Here is a sample HTML file with a submit button. Write a JavaScript function to get the value
 of the href, hreflang, rel, target, and type attributes of the specified link. */
const link = document.querySelector('#w3r');
function getAttributes() {
  console.log(link.href);
  alert(`href: ${link.href}`);
  console.log(link.hreflang);
  alert(`hreflang: ${link.hreflang}`);
  console.log(link.rel);
  alert(`rel: ${link.rel}`);
  console.log(link.target);
  alert(`target: ${link.target}`);
  console.log(link.type);
  alert(`type: ${link.type}`);
}