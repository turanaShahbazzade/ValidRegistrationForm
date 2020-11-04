let termInp = document.querySelector("input[name='terms']");
let submitBtn = document.querySelector(".submit-btn");
let myForm = document.querySelector("#register");

termInp.addEventListener("click", function () {
  submitBtn.toggleAttribute("disabled");
});

myForm.addEventListener("submit", function (e) {
  let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/;
  let email = document.querySelector("input[name='email']");
  let repEmail = document.querySelector("input[name='repEmail']");
  let pass = document.querySelector("input[name='pass']");
  let repPass = document.querySelector("input[name='repPass']");

  let validEmailRepeat = false;
  let validPassRepeat = false;
  let validRegexEmail = false;
  let validRegexPass = false;
  let validEmailRequired = false;

  let emailError = "";

  if (email.value === "" || email.value === null) {
    email.style.borderColor = "red";
    email.previousElementSibling.style.color = "red";
    email.nextElementSibling.classList.remove("d-none");
    emailError += "Bu xana mecburidir.";
    email.nextElementSibling.innerHTML = emailError;
    email.nextElementSibling.classList.remove("text-muted");
    email.nextElementSibling.classList.add("text-danger");
    validEmailRequired = false;
  } else {
    email.style.borderColor = "black";
    email.previousElementSibling.style.color = "black";
    email.nextElementSibling.classList.add("d-none");
    email.nextElementSibling.innerHTML = "";
    validEmailRequired = true;
  }
  if (
    email.value !== repEmail.value ||
    email.value == "" ||
    repEmail.value == ""
  ) {
    email.previousElementSibling.style.color = "red";
    repEmail.previousElementSibling.style.color = "red";
    email.style.borderColor = "red";
    repEmail.style.borderColor = "red";
    repEmail.nextElementSibling.classList.remove("d-none");
    emailError += " Emailler uygunlashmir.";
    repEmail.nextElementSibling.innerHTML = emailError;
    repEmail.nextElementSibling.classList.remove("text-muted");
    repEmail.nextElementSibling.classList.add("text-danger");
    validEmailRepeat = false;
  } else {
    email.previousElementSibling.style.color = "black";
    repEmail.previousElementSibling.style.color = "black";
    email.style.borderColor = "gray";
    repEmail.style.borderColor = "gray";
    repEmail.nextElementSibling.classList.add("d-none");
    repEmail.nextElementSibling.innerHTML = "";
    validEmailRepeat = true;
  }
  if (!email.value.match(regexEmail)) {
    email.previousElementSibling.style.color = "red";
    email.style.borderColor = "red";
    email.nextElementSibling.classList.remove("d-none");
    emailError += " Email duzgun shekilde qeyd olunmuyub";
    email.nextElementSibling.innerHTML = emailError;
    email.nextElementSibling.classList.remove("text-muted");
    email.nextElementSibling.classList.add("text-danger");
    validRegexEmail = false;
  } else {
    email.previousElementSibling.style.color = "black";
    email.style.borderColor = "black";
    email.nextElementSibling.classList.add("d-none");
    email.nextElementSibling.innerHTML = "";
    validRegexEmail = true;
  }

  if (pass.value !== repPass.value || pass.value == "" || repPass == "") {
    pass.previousElementSibling.style.color = "red";
    repPass.previousElementSibling.style.color = "red";
    pass.style.borderColor = "red";
    repPass.style.borderColor = "red";
    repPass.nextElementSibling.classList.remove("d-none");
    repPass.nextElementSibling.innerHTML = " Passwordlar uygunlashmir.";
    repPass.nextElementSibling.classList.remove("text-muted");
    repPass.nextElementSibling.classList.add("text-danger");
    validPassRepeat = false;
  } else {
    pass.previousElementSibling.style.color = "black";
    repPass.previousElementSibling.style.color = "black";
    pass.style.borderColor = "gray";
    repPass.style.borderColor = "gray";
    repPass.nextElementSibling.classList.add("d-none");
    repPass.nextElementSibling.innerHTML = "";
    validPassRepeat = true;
  }
  if (!pass.value.match(regexPass)) {
    pass.previousElementSibling.style.color = "red";
    pass.style.borderColor = "red";
    pass.nextElementSibling.classList.remove("d-none");
    pass.nextElementSibling.innerHTML =
      "Password duzgun deyil, en azi bir simvol, bir boyuk herf, bir kichik herf, reqem daxil etmelisiz";
    pass.nextElementSibling.classList.remove("text-muted");
    pass.nextElementSibling.classList.add("text-danger");
    validRegexPass = false;
  } else {
    pass.previousElementSibling.style.color = "black";
    pass.style.borderColor = "black";
    pass.nextElementSibling.classList.add("d-none");
    pass.nextElementSibling.innerHTML = "";
    validRegexPass = true;
  }

  if (
    validEmailRepeat &&
    validRegexEmail &&
    validPassRepeat &&
    validRegexPass &&
    validEmailRequired
  ) {
    console.log("form is submitted");
  } else {
    e.preventDefault();
    console.log("formda errorlar movcuddur");
  }
});


