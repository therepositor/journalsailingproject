const navbarItems = document.querySelector(".navbar-items");
const openHamburger = document.getElementById("hamburger");
const navBarItems = document.getElementById("navbar-items");
const backDrop = document.getElementById("backdrop");
const removeBackDrop = document.getElementsByClassName(".body");
const navLogoNavLink = document.getElementById("logo-navlink");
console.log({ openHamburger });

navBarItems.addEventListener("mouseover", displayBackDrop);
function displayBackDrop(e) {
  console.log("backdrop");
  backDrop.style.visibility = "visible";
  navLogoNavLink.style.color = "gray";
}

backDrop.addEventListener("mouseout", hideBackDrop);
function hideBackDrop(e) {
  backDrop.style.visibility = "hidden";
}

console.log("loool");
console.log({ openHamburger });
openHamburger.addEventListener("click", () => {
  console.log("yeah!!");
  if (!navbarItems.classList.contains("show")) {
    navbarItems.classList.add("show");
  } else {
    navbarItems.classList.remove("show");
  }
});

const openShop = document.getElementById("shop");
openShop.addEventListener("mouseover", () => {
  const divList = document.querySelectorAll(".open-wrapper");
  divList.forEach((div) => {
    console.log("shop!");
    if (!div.classList.contains("shop-wrapper")) {
      console.log(div, "--all for none");
      div.style.display = "none";
    } else {
      console.log(div, "--all for flex");
      div.style.display = "flex";
    }
  });
});

const openMakers = document.getElementById("makers");
openMakers.addEventListener("mouseover", () => {
  const divList = document.querySelectorAll(".open-wrapper");
  divList.forEach((div) => {
    console.log("makers!");
    if (!div.classList.contains("makers-wrapper")) {
      console.log(div, "--all for none");
      div.style.display = "none";
    } else {
      console.log(div, "--all for flex");
      div.style.display = "flex";
    }
  });
});

const openJournal = document.getElementById("journal");
openJournal.addEventListener("mouseover", () => {
  const divList = document.querySelectorAll(".open-wrapper");
  divList.forEach((div) => {
    console.log("journal!");
    if (!div.classList.contains("journal-wrapper")) {
      console.log(div, "--all for none");
      div.style.display = "none";
    } else {
      console.log(div, "--all for flex");
      div.style.display = "flex";
    }
  });
});

const openSearch = document.getElementById("search");
openSearch.addEventListener("mouseover", () => {
  const divList = document.querySelectorAll(".open-wrapper");
  divList.forEach((div) => {
    console.log("search!");
    if (!div.classList.contains("form-search")) {
      console.log(div, "--all for none");
      div.style.display = "none";
    } else {
      console.log(div, "--all for flex");
      div.style.display = "flex";
    }
  });
});

const openLogin = document.getElementById("login");
openLogin.addEventListener("mouseover", () => {
  const divList = document.querySelectorAll(".open-wrapper");
  divList.forEach((div) => {
    console.log("login!");
    if (!div.classList.contains("form-login")) {
      console.log(div, "--all for none");
      div.style.display = "none";
    } else {
      console.log(div, "--all for flex");
      div.style.display = "flex";
    }
  });
});
`console.table(84)`;
// openHamburger.addEventListener("click", open);
// function open(e) {
//   navbarItems.style.display = "flex";
//   navbarItems.style.top = "0";
//   console.log("open navbar-items");
// }

// openMenu.addEventListener("click", () => {
//   console.log("fired me");
//   if (!hamburgerMenu.classList.contains("show")) {
//     hamburgerMenu.classList.add("show");
//   } else {
//     hamburgerMenu.classList.remove("show");
//   }
// });
