document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (event) {
      if (!collect_data()) {
        event.preventDefault();
      }
    });
  }
});

// ======================================
// MAIN VALIDATION FUNCTION
// ======================================

function collect_data() {
  let validName = validateName();

  let validateAge = validAge();

  let validateEmail = validEmail();

  let validategender = validateGender();

  let validDept = validateDepartment();

  return (
    validName && validateAge && validateEmail && validategender && validDept
  );
}

// ======================================
// NAME VALIDATION
// ======================================

function validateName() {
  let Pname = document.getElementById("PatientName").value.trim();

  let Error = document.getElementById("NameError");

  // Check empty name
  if (Pname == "") {
    Error.innerHTML = "Enter The Name";

    return false;
  }

  // Check name length
  else if (Pname.length < 6) {
    Error.innerHTML = "Name Must be at least 6 Char";

    return false;
  }

  // Name is valid
  else {
    Error.innerHTML = "Patient Name: " + Pname;

    return true;
  }
}

// ======================================
// AGE VALIDATION
// ======================================

function validAge() {
  let PAge = Number(document.getElementById("PatientAge").value);

  let ErrorAge = document.getElementById("AgeError");

  // Check empty age
  if (document.getElementById("PatientAge").value === "") {
    ErrorAge.innerHTML = "Please Enter The Age";

    return false;
  }

  // Check age range
  else if (PAge < 1 || PAge > 100) {
    ErrorAge.innerHTML = "Age Must be Within the Limit";

    return false;
  }

  // Age is valid
  else {
    ErrorAge.innerHTML = "Patient Age: " + PAge;

    return true;
  }
}

// ======================================
// EMAIL VALIDATION
// ======================================

function validEmail() {
  let Email = document.getElementById("PatientEmail").value.trim();

  let Error = document.getElementById("EmailError");

  // Email pattern
  let regexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check empty email
  if (Email === "") {
    Error.innerHTML = "Please Enter The Email";

    return false;
  }

  // Check email format
  else if (!regexpression.test(Email)) {
    Error.innerHTML = "Please Enter The Right Email Format";

    return false;
  }

  // Email is valid
  else {
    Error.innerHTML = "Patient Email: " + Email;

    return true;
  }
}

// ======================================
// GENDER VALIDATION
// ======================================

function validateGender() {
  let genders = document.querySelectorAll('input[name="gender"]');

  let GenderError = document.getElementById("ErrorGender");

  let selectGender = "";

  // Check every radio button
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      selectGender = genders[i].value;

      break;
    }
  }

  // No gender selected
  if (selectGender == "") {
    GenderError.innerHTML = "Please Enter the Gender";

    return false;
  }

  // Gender selected
  else {
    GenderError.innerHTML = "Gender: " + selectGender;

    return true;
  }
}

// ======================================
// DEPARTMENT VALIDATION
// ======================================

function validateDepartment() {
  let departments = document.querySelectorAll('input[name="dept"]');

  let deptError = document.getElementById("DeptError");

  let selectedDepartments = [];

  // Check every checkbox
  for (let i = 0; i < departments.length; i++) {
    if (departments[i].checked) {
      selectedDepartments.push(departments[i].value);
    }
  }

  // No department selected
  if (selectedDepartments.length === 0) {
    deptError.innerHTML = "Please select at least one department";

    return false;
  }

  // Department selected
  else {
    deptError.innerHTML =
      "Selected Department(s): " + selectedDepartments.join(", ");

    return true;
  }
}
