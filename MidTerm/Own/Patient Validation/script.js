// Select the form
const form = document.getElementById("patientForm");

// Function to show error messages
function showError(id, message) {
  document.getElementById(id).innerHTML = message;
}

// Function to clear error messages
function clearError(id) {
  document.getElementById(id).innerHTML = "";
}

// Form submit event
form.addEventListener("submit", function (event) {
  // Stop normal form submission
  event.preventDefault();

  // Read input values
  let name = document.getElementById("name").value.trim();

  let age = document.getElementById("age").value.trim();

  let email = document.getElementById("email").value.trim();

  let dob = document.getElementById("dob").value;

  let phone = document.getElementById("phone").value.trim();

  let address = document.getElementById("address").value.trim();

  let country = document.getElementById("country").value;

  let username = document.getElementById("username").value.trim();

  let password = document.getElementById("password").value;

  let confirmPassword = document.getElementById("confirmPassword").value;

  // Assume form is valid initially
  let isValid = true;

  // 1. Name validation

  if (name === "") {
    showError("nameError", "Name is required");

    isValid = false;
  } else {
    clearError("nameError");
  }

  // 2. Age validation

  if (age === "" || Number(age) < 1 || Number(age) > 120) {
    showError("ageError", "Enter age between 1 and 120");

    isValid = false;
  } else {
    clearError("ageError");
  }

  // 3. Email validation

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showError("emailError", "Email is required");

    isValid = false;
  } else if (!emailPattern.test(email)) {
    showError("emailError", "Enter a valid email");

    isValid = false;
  } else {
    clearError("emailError");
  }

  // 4. Date of birth validation

  if (dob === "") {
    showError("dobError", "Date of birth is required");

    isValid = false;
  } else if (new Date(dob) > new Date()) {
    showError("dobError", "Date cannot be in the future");

    isValid = false;
  } else {
    clearError("dobError");
  }

  // 5. Phone validation

  let phonePattern = /^01[3-9][0-9]{8}$/;

  if (!phonePattern.test(phone)) {
    showError("phoneError", "Enter a valid 11 digit phone number");

    isValid = false;
  } else {
    clearError("phoneError");
  }

  // 6. Gender validation

  let gender = document.querySelector('input[name="gender"]:checked');

  if (gender === null) {
    showError("genderError", "Select your gender");

    isValid = false;
  } else {
    clearError("genderError");
  }

  // 7. Address validation

  if (address === "") {
    showError("addressError", "Address is required");

    isValid = false;
  } else {
    clearError("addressError");
  }

  // 8. Country validation

  if (country === "") {
    showError("countryError", "Select your country");

    isValid = false;
  } else {
    clearError("countryError");
  }

  // 9. Department checkbox validation

  let departments = document.querySelectorAll(
    'input[name="department"]:checked',
  );

  if (departments.length === 0) {
    showError("departmentError", "Select at least one department");

    isValid = false;
  } else {
    clearError("departmentError");
  }

  // 10. Username validation

  if (username.length < 4 || username.length > 15) {
    showError("usernameError", "Username must be 4-15 characters");

    isValid = false;
  } else {
    clearError("usernameError");
  }

  // 11. Password validation

  if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    showError(
      "passwordError",
      "Password needs 8 characters, uppercase, lowercase and number",
    );

    isValid = false;
  } else {
    clearError("passwordError");
  }

  // 12. Confirm password validation

  if (confirmPassword === "") {
    showError("confirmError", "Please confirm your password");

    isValid = false;
  } else if (password !== confirmPassword) {
    showError("confirmError", "Passwords do not match");

    isValid = false;
  } else {
    clearError("confirmError");
  }

  // 13. Terms and conditions validation

  let terms = document.getElementById("terms").checked;

  if (!terms) {
    showError("termsError", "Please accept Terms and Conditions");

    isValid = false;
  } else {
    clearError("termsError");
  }

  // Final result

  let result = document.getElementById("result");

  if (isValid) {
    result.innerHTML = "Registration Successful!";

    result.style.color = "green";
  } else {
    result.innerHTML = "Please fix the errors above.";

    result.style.color = "red";
  }
});

// Reset event

form.addEventListener("reset", function () {
  let errors = document.querySelectorAll(".error");

  for (let i = 0; i < errors.length; i++) {
    errors[i].innerHTML = "";
  }

  document.getElementById("result").innerHTML = "";
});
