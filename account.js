// Sample credentials
const validUsername = "admin";
const validPassword = "password";

function login(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password are valid
  if (username === validUsername && password === validPassword) {
    showMessage("Login successful!");
  } else {
    showMessage("Invalid username or password!");
  }
}

function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
}