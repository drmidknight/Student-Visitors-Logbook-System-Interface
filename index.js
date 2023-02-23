// Get the form and input elements
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-btn");

// Add an event listener to the login button
loginButton.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the default form submission

  // Get the input values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Input validation
  if (username === "" || password === "") {
    alert("Please enter your username and password.");
  } else if (username.length < 30 || password.length < 10) {
    alert("Username and password must be at least 6 characters long.");
  } else {
    // Move to the admin dashboard page
    window.location.href = "admin-dashboard.html";
  }
});