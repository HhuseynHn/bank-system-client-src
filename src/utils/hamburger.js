/** @format */

export function hamburger() {
  let hambgerButton = document.querySelector(".hambr-icon");
    let navBar = document.querySelector(".nav-bar-list");
    let closeIcon = document.querySelector(".close-icon");

  hambgerButton.addEventListener("click", () => {
      navBar.classList.toggle("navbar-list-show");
      hambgerButton.classList.toggle("hidden")
      closeIcon.classList.toggle("hidden")

  });
    closeIcon.addEventListener("click", () => {
        
        navBar.classList.toggle("navbar-list-show");
        hambgerButton.classList.toggle("hidden")
        closeIcon.classList.toggle("hidden")


    })
}
