const mobileMenu = document.querySelector(".mobile__menu");
const hamburgerBtn = document.querySelector(".btn--open");
const closeBtn = document.querySelector(".btn--close");

// Open mobile menu
hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Close mobile menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Hide mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll(".mobile__menu ul li");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Close mobile menu when the user scrolls
window.addEventListener("scroll", () => {
  mobileMenu.classList.remove("active");
});
