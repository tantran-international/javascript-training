// define elements
const form = document.querySelector('.signup-form');
const email = document.querySelector('#email');
const username = document.querySelector('#user-name');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password-confirm');

// Validate and display error messages by creating text and assigning to it's P tags
const checkError = (element, message) => {
  const showMessage = element.parentElement.querySelector('.form-message');

  showMessage.innerText = message;
};

// Show nothing when value is valid
const checkSuccess = (element) => {
  const showMessage = element.parentElement.querySelector('.form-message');

  showMessage.innerText = '';
};

// Validate email address with regular expressions (Stack Over Flow)
const validateEmail = (input) => {
  const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regExp.test(input);
};

// Function display inputs to the screen
const displayInfo = () => {
  let result = '';

  for (i = 0; i < (form.length - 1); i++) {
    const label = form[i].parentElement.querySelector('label');
    result += label.textContent + ' ' + form[i].value + '\n';
  }
  document.querySelector('.result').innerText = result;
};

// Validate inputs if submit event is fired
const validateInputs = () => {
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // Validate email
  if (emailValue === '') {
    checkError(email, 'Email address empty or wrong format, example: username@somewhere.sth');
  } else if (!validateEmail(emailValue)) {
    checkError(email), 'Provide a valid email address';
  } else {
    checkSuccess(email);
  }

  // Validate user-name, as low as 5 characters
  if (usernameValue.length <= 4) {
    checkError(username, 'Please enter the correct format for Username. (No leading or trailing spaces)');
  } else {
    checkSuccess(username);
  }

  // Validate password, as low as 8 characters
  if (passwordValue.length < 8) {
    checkError(password, 'Please enter the correct format for Password. (8 character. at least one non-letter)');
  } else {
    checkSuccess(password);
  }

  // Validate confirm-password
  if (confirmPasswordValue.length < 8) {
    checkError(confirmPassword, 'Please enter the correct format for Password. (8 character. at least one non-letter)');
  } else if (confirmPasswordValue !== passwordValue) {
    checkError(confirmPassword, 'Make sure password and confirm passwords match');
  } else {
    checkSuccess(confirmPassword);
  }

  // If all inputs is valid & show detailed user's information
  if (emailValue && usernameValue && passwordValue.length >= 8 && confirmPasswordValue.length >= 8 && passwordValue === confirmPasswordValue) {
    displayInfo();
  }
};

// Add Event Listener, prevent auto-refresh page action and call function vadidateInputs
form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});
