const hamburgerMenu = document.querySelector(".hamburger-menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  hamburgerMenu.style.display = "flex";
  hamburgerMenu.style.top = "0";
}
function close() {
  hamburgerMenu.style.top = "-100%";
}

/*const hamburgerMenu = document.querySelector(".hamburger-menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  hamburgerMenu.style.display = "flex";
  hamburgerMenu.style.top = "0";
}
function close() {
  hamburgerMenu.style.top = "-100%";
}*/
