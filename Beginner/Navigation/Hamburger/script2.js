const openMenu = document.getElementById("open-menu");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
  console.log("fired me");
  if (!hamburgerMenu.classList.contains("show")) {
    hamburgerMenu.classList.add("show");
  } else {
    hamburgerMenu.classList.remove("show");
  }
});

/*closeMenu.addEventListener("click", () => {
  hamburgerMenu.classList.remove("close");
});*/
