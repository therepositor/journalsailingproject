const openDownload = document.getElementById("download");
openDownload.addEventListener("click", () => {
  const divsList = document.querySelectorAll(".views");
  console.log({ divsList });
  divsList.forEach((div) => {
    if (!div.classList.contains("wrapper")) {
      div.style.display = "none";
    } else {
      div.style.display = "flex";
    }
  });
  console.log("alert me");
});
const openAll = document.getElementById("all");
openAll.addEventListener("click", () => {
  const divsList = document.querySelectorAll(".views");
  divsList.forEach((div) => {
    if (!div.classList.contains("wrapper-all")) {
      console.log(div, "--all for none");
      div.style.display = "none";
    } else {
      console.log(div, "--all for flex");
      div.style.display = "flex";
    }
  });

  console.log("alert!!");
});
const openExternalStorage = document.getElementById("externalStorage");
openExternalStorage.addEventListener("click", () => {
  const divsList = document.querySelectorAll(".views");
  divsList.forEach((div) => {
    if (!div.classList.contains("wrapper-externalStorage")) {
      console.log(div, "--xternal for none");
      div.style.display = "none";
    } else {
      console.log(div, "--xternal for flex");
      div.style.display = "flex";
    }
  });
  console.log("alert!!");
});
const openRunning = document.getElementById("running");
openRunning.addEventListener("click", () => {
  const divsList = document.querySelectorAll(".views");
  divsList.forEach((div) => {
    console.log(div, "--runnign for none");
    if (!div.classList.contains("wrapper-running")) {
      div.style.display = "none";
    } else {
      console.log(div, "--runnign for flex");
      div.style.display = "flex";
    }
  });
  console.log("alert!!");
});

const openDisabled = document.getElementById("disabled");
openDisabled.addEventListener("click", () => {
  const divsList = document.querySelectorAll(".views");
  divsList.forEach((div) => {
    if (!div.classList.contains("wrapper-disabled")) {
      console.log(div, "--disabled for none");
      div.style.display = "none";
    } else {
      console.log(div, "--disabled for flex");
      div.style.display = "flex";
    }
  });
  console.log("alert!!");
});
