//hover on library element
//edit button should display, so also is close icon
// click on edit to display on checkbox form
// edit button should change to Done
// check items
// click on Done to add items checked to the list of items on library
// click on close icon to hide checkbox form
// identify the common purpose by query by class used to style them which should return an array.
// attach click event for each element ysing a for loop
// write a function to show actual element
// use event object to find out particular element been clicked
//

const showEditOptions = document.getElementById("show");
const openCheckboxOptions = document.getElementById("checkbox");
const closeEditOptions = document.getElementById("close");
const expandViewHeight = document.getElementById("library");
const addCheckedItemsToLibrary = document.getElementById("show");
const confirmCheckedItemsToLibrary = document.getElementById("show");

showEditOptions.addEventListener("click", show);
closeEditOptions.addEventListener("click", hide);
confirmCheckedItemsToLibrary.addEventListener("click", addItems);

const checkedItemsToLibrary = document.querySelectorAll(".library");
for (var i = 0; i < checkedItemsToLibrary.length; i++) {
  const element = checkedItemsToLibrary[i];
  element.addEventListener("click", (e) => {
    const value = e.target.dataset.class;
    console.log(value);
    const htmlElement = document.getElementById(value);
    console.log(htmlElement);
    htmlElement.style.display = "flex";
  });
}
function show(e) {
  console.log(e.target.dataset);
  openCheckboxOptions.style.display = "flex";
  closeEditOptions.style.display = "flex";
  expandViewHeight.style.height = "auto";
  document.getElementById("show").innerText = "Done";

  console.log("alert me!");
}

function hide() {
  openCheckboxOptions.style.display = "none";
  expandViewHeight.style.height = "27vh";
  document.getElementById("show").innerText = "Edit";
  console.log("alert close");
}
function addItems(e) {
  if (e.target.innertext === "Done") {
  } else {
    show();
  }
}
