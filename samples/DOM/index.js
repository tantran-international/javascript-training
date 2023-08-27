// Selecting elements
const accessClass = document.querySelector('.main-title');

// modifying classnames
accessClass.classList.replace('main-title', 'head-title');

// modifying styles
accessClass.setAttribute('style', 'color: red; font-size: 50px;');

// modifying attributes, add Even change Image onclick
const accessImage = document.querySelector('.main-image');
accessImage.setAttribute('style', 'width: 150px; height: 150px;');

const changeImage = () => {
  accessImage.setAttribute('src', 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg');
};

accessImage.addEventListener('click', changeImage);
