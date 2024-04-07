/** @format */

import {
  passwrodValidate,
  repeatPasswordValidate,
  nameValidate,
  surnameValidate,
} from "../utils/validation.js";
let formMain = document.querySelector(".form-main");
let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let passwordInput = document.querySelector("#password");
let repeatPasswordInput = document.querySelector("#repeat-password");
let formHidenEye = document.querySelector(".form-hidden-eye-paswrd");
let formHidenEyeSlash = document.querySelector(".form-hidden-eye-slash-paswrd");
let formHidenEyeRepeat = document.querySelector(
  ".form-hidden-eye-repreat-paswrd"
);
let registerButton = document.querySelector(".form-register");

let formHidenEyeSlashRepeat = document.querySelector(
  ".form-hidden-eye-slash-repreat-paswrd"
);

formHidenEyeSlash.addEventListener("click", () => {
  if (passwordInput.getAttribute("type") === "text") {
    passwordInput.setAttribute("type", "password");
    formHidenEyeSlash.classList.remove("icon-show");
    formHidenEyeSlash.classList.add("icon-hidden");
    formHidenEye.classList.add("icon-show");
    formHidenEye.classList.remove("icon-hidden");
  }
});
formHidenEye.addEventListener("click", () => {
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
    formHidenEye.classList.remove("icon-show");
    formHidenEye.classList.add("icon-hidden");
    formHidenEyeSlash.classList.remove("icon-hidden");
    formHidenEyeSlash.classList.add("icon-show");
  }
});

formHidenEyeRepeat.addEventListener("click", () => {
  if (repeatPasswordInput.getAttribute("type") === "password") {
    repeatPasswordInput.setAttribute("type", "text");
    formHidenEyeRepeat.classList.add("icon-hidden");
    formHidenEyeRepeat.classList.remove("icon-show");
    formHidenEyeSlashRepeat.classList.remove("icon-hidden");
    formHidenEyeSlashRepeat.classList.add("icon-show");
  }
});

formHidenEyeSlashRepeat.addEventListener("click", () => {
  if (repeatPasswordInput.getAttribute("type") === "text") {
    repeatPasswordInput.setAttribute("type", "password");
    formHidenEyeSlashRepeat.classList.remove("icon-show");
    formHidenEyeSlashRepeat.classList.add("icon-hidden");
    formHidenEyeRepeat.classList.remove("icon-hidden");
    formHidenEyeRepeat.classList.add("icon-show");
  }
});

registerButton.addEventListener("mouseover", (e) => {
  e.preventDefault();
  let { name, surname, password, repeatPassword } = formMain.elements;

  if (
    !name.value.trim() ||
    !surname.value.trim() ||
    !password.value.trim() ||
    !repeatPassword.value.trim()
  ) {
    registerButton.classList.toggle("rigth");
    registerButton.innerHTML = "Complete !!!";
    registerButton.classList.remove("size");
  } else {
    registerButton.innerHTML = "Register";
    registerButton.classList.remove("right");
    registerButton.classList.add("size");
  }
});

registerButton.addEventListener("click", (e) => {
  e.preventDefault();

  let { name, surname, password, repeatPassword } = formMain.elements;
  let nameResult = nameValidate(name.value.trim());
  let surnameResult = surnameValidate(surname.value.trim());
  let passwrodResult = passwrodValidate(password.value.trim());
  let repearPasswordResult = repeatPasswordValidate(
    password.value.trim(),
    repeatPassword.value.trim()
  );

  let errorName = document.querySelector(".error-name");
  let errorSurname = document.querySelector(".error-surname");
  let errorPassword = document.querySelector(".error-password");
  let errorRepeatPassword = document.querySelector(".error-repeat-password");

  if (!nameResult.success) {
    errorName.innerHTML = nameResult.message;
  } else {
    errorName.innerHTML = "";
  }
  if (!surnameResult.success) {
    errorSurname.innerHTML = surnameResult.message;
  } else {
    errorSurname.innerHTML = "";
  }

  if (!passwrodResult.success) {
    errorPassword.innerHTML = passwrodResult.message;
  } else {
    errorPassword.innerHTML = "";
  }

  if (!repearPasswordResult.success) {
    errorRepeatPassword.innerHTML = repearPasswordResult.message;
  } else {
    errorRepeatPassword.innerHTML = "";
  }

  if (
    nameResult.success &&
    surnameResult.success &&
    passwrodResult.success &&
    repearPasswordResult.success
  ) {
    localStorage.setItem("name", name.value.trim());
    localStorage.setItem("password", password.value.trim());
    window.location.href = "./pages/login.html";
  }
});
