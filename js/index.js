const showMenu = document.querySelector(".toggle-on");
const hideMenu = document.querySelector(".toggle-off");
const mobileMenu = document.querySelector(".menu-mobile");

// Event Listeners
showMenu.addEventListener("click", function () {
  // Show modal menu
  mobileMenu.classList.remove("hide-menu");
  mobileMenu.classList.add("show-menu");
});

hideMenu.addEventListener("click", function () {
  // Hide modal menu
  mobileMenu.classList.remove("show-menu");
  mobileMenu.classList.add("hide-menu");
});
