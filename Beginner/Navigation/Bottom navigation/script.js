function drawChart({ size = "big", coords = { x: 0, y: 0 }, radius = 25 }) {
  console.log(size, coords, radius);
  // do some chart drawing
}
console.log(
  drawChart({
    coords: { x: 18, y: 30 },
    radius: 30,
  })
);

const documentElement = document.querySelector("html");
const contentElement = document.querySelector(".main-content");
const sidebarElement = document.querySelector(".sidebar");
const sidebarIsOpen = () =>
  documentElement.classList.contains("sidebar-is-open");
const openSidebar = () => {
  /* How you trigger the change is up to you */ documentElement.classList.add(
    "sidebar-is-open"
  );
};
const closeSidebar = () => {
  documentElement.classList.remove("sidebar-is-open");
};
const toggleSidebar = () => {
  sidebarIsOpen() ? closeSidebar() : openSidebar();
};
