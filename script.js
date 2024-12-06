const menuClose = document.getElementById("menuClose");
const menuOpen = document.getElementById("menuOpen");
const navItems = document.getElementById("navItems");

function openmenu() {
  if (navItems.style.display !== "block") {
    navItems.style.display = "block";
    menuOpen.style.display = "none"; // Hide the open button
    menuClose.style.display = "block"; // Show the close button
  }
}

function closemenu() {
  if (navItems.style.display !== "none") {
    navItems.style.display = "none";
    menuOpen.style.display = "block"; // Show the open button
    menuClose.style.display = "none"; // Hide the close button
  }
}

// Initially, only show the menuOpen button
// menuOpen.style.display = "block";
// menuClose.style.display = "none";

menuOpen.addEventListener("click", openmenu);
menuClose.addEventListener("click", closemenu);

window.onresize = function () {
  location.reload();
};
