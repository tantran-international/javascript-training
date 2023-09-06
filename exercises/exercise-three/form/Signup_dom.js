// define elements
const form = document.querySelector('.signup-form');
const email = document.querySelector('#email');
const username = document.querySelector('#user-name');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password-confirm');

// Validate and display error messages by creating text and assigning to it's P tags
const displayError = (element, message) => {
  const showMessage = element.parentElement.querySelector('.form-message');
  showMessage.innerText = message;
};

// Show nothing when value is valid
const displaySuccess = (element) => {
  const showMessage = element.parentElement.querySelector('.form-message');
  showMessage.innerText = '';
};

// Check email is empty or not (true <-> false)
const isEmailEmpty = (input) => {
  if (input == '') {
    return true;
  } else {
    return false;
  }
};

// Validate email address with regular expressions (Stack Over Flow)
const validateEmail = (input) => {
  const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regExp.test(input);
};

// Display user's information to the screen
const displayInfo = () => {
  let result = '';
  const total = form.length - 1;
  
  for (let index = 0; index < total; index++) {
    const label = form[index].parentElement.querySelector('label');
    result += label.textContent + ' ' + form[index].value + '\n';
  }
  document.querySelector('.result').innerText = result;
};

// Define at least characters to inputs
const atLeastCharacters = (input) => {
  input = input - 1;
  return input;
};

// Big function: Validate inputs if submit event is fired
const validateInputs = () => {
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  const isValidCredential = emailValue && usernameValue && passwordValue.length >= 8 && confirmPasswordValue.length >= 8 && passwordValue === confirmPasswordValue;

  // Validate email
  if (isEmailEmpty(emailValue)) {
    displayError(email, 'Email address empty or wrong format, example: username@somewhere.sth');
  } else if (!validateEmail(emailValue)) {
    displayError(email, 'Provide a valid email address');
  } else {
    displaySuccess(email);
  }

  // Validate user-name && as least 5 characters
  if (usernameValue.length <= atLeastCharacters(5)) {
    displayError(username, 'Please enter the correct format for Username. (No leading or trailing spaces)');
  } else {
    displaySuccess(username);
  }

  // Validate password && as least 8 characters
  if (passwordValue.length <= atLeastCharacters(8)) {
    displayError(password, 'Please enter the correct format for Password. (8 character. at least one non-letter)');
  } else {
    displaySuccess(password);
  }

  // Validate confirm-password && as least 8 characters
  if (confirmPasswordValue.length <= atLeastCharacters(8)) {
    displayError(confirmPassword, 'Please enter the correct format for Password. (8 character. at least one non-letter)');
  } else if (confirmPasswordValue !== passwordValue) {
    displayError(confirmPassword, 'Make sure password and confirm passwords match');
  } else {
    displaySuccess(confirmPassword);
  }

  // If all inputs is valid & show detailed user's information
  if (isValidCredential) {
    displayInfo();
  }
};

// Add Event Listener, prevent auto-refresh page action and call function vadidateInputs
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});
