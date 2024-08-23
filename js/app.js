const burgerIcon = document.querySelector(".burger-icon");
const toggleMenu = document.querySelector(".toggle-menu");

burgerIcon.addEventListener("click", () => {
  if (toggleMenu.classList.contains("hidden")) {
    toggleMenu.classList.remove("hidden");
  } else {
    toggleMenu.classList.add("hidden");
  }
});
