document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let studentId = document.getElementById("studentId").value;
  let email = document.getElementById("email").value;

  let message = document.getElementById("message");

  if (name == "") {
    message.innerHTML = "Name is required!";
    message.className = "error";
    message.style.display = "block";
    return;
  }

  if (studentId == "") {
    message.innerHTML = "Student ID is required!";
    message.className = "error";
    message.style.display = "block";
    return;
  }

  if (email == "") {
    message.innerHTML = "Email is required!";
    message.className = "error";
    message.style.display = "block";
    return;
  }

  message.innerHTML = "Validation Successful!";
  message.className = "success";
  message.style.display = "block";
});
