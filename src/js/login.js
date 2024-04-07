/** @format */
let loginButton = document.querySelector(".form-register");
let formMain = document.querySelector(".form-main");
let passwordInput = document.querySelector("#password");
let errorMessage = document.querySelector(".error-name");
let hiddenEyeIcon = document.querySelector(".icon-hidden-eye");
let hiddenEyeSlashIcon = document.querySelector(".icon-hidden-slash-eye");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  let { name, password } = formMain.elements;

  let nameLocalStrge = localStorage.getItem("name");
  let passwordLocalStrge = localStorage.getItem("password");

  if (name.value === nameLocalStrge && passwordLocalStrge === password.value) {
    errorMessage.innerHTML = "";
    window.location.href = "../pages/main.html";
  } else {
    errorMessage.innerHTML = "Name or password is wrong!!!";
  }
});

hiddenEyeSlashIcon.addEventListener("click", () => {
  hiddenEyeSlashIcon.classList.add("icon-hidden");
  hiddenEyeSlashIcon.classList.remove("show-icon");
  hiddenEyeIcon.classList.add("show-icon");
  hiddenEyeIcon.classList.remove("icon-hidden");
  passwordInput.setAttribute("type", "text");
});

hiddenEyeIcon.addEventListener("click", () => {
  hiddenEyeSlashIcon.classList.add("show-icon");
  hiddenEyeSlashIcon.classList.remove("icon-hidden");
  hiddenEyeIcon.classList.add("icon-hidden");
  hiddenEyeIcon.classList.remove("show-icon");

  passwordInput.setAttribute("type", "password");
});

loginButton.addEventListener("mouseover", () => {
  let { name, password } = formMain.elements;
  if (!name.value && !password.value) {
    loginButton.classList.toggle("right");
    loginButton.innerHTML = "Complete";
  } else {
    loginButton.innerHTML = "Login";
  }
});
