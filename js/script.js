const btn = document.getElementById("menu-icon");
const menu = document.getElementById("menu-section");
const menuOpen = document.getElementById("nav");
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  btn.classList.remove("no-animation");
  menuOpen.classList.toggle("menu-open");
});
// navbar info section marker js
const marker = document.querySelector("#marker");
const info = document.querySelectorAll(".info");
function markerInfo(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}
info.forEach((item) => {
  item.addEventListener("click", (e) => {
    markerInfo(e.target);
  });
});
