const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navlinks.classList.toggle("active");
  navActions.classList.toggle("active");
}

// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach((n) => n.addEventListener("click", closeMenu));

// function closeMenu() {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }
