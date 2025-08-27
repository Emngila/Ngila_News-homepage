const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const openBtn = document.getElementById("openBtn"); // your hamburger

openBtn.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("translate-x-full");
});

