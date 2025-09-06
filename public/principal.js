const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const userMenuBtn = document.getElementById("userMenuBtn");
const userDropdown = document.getElementById("userDropdown");
const arrowIcon = document.getElementById("arrowIcon");
const userMenuWrapper = document.getElementById("userMenuWrapper");

let menuOpen = false;

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
}

function closeSidebar() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
}

function openUserMenu() {
  userDropdown.classList.remove("scale-95", "opacity-0", "pointer-events-none");
  userDropdown.classList.add("scale-100", "opacity-100", "pointer-events-auto");
  arrowIcon.classList.add("rotate-180");
  menuOpen = true;
}

function closeUserMenu() {
  userDropdown.classList.add("scale-95", "opacity-0", "pointer-events-none");
  userDropdown.classList.remove(
    "scale-100",
    "opacity-100",
    "pointer-events-auto"
  );
  arrowIcon.classList.remove("rotate-180");
  menuOpen = false;
}

menuBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

userMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (menuOpen) {
    closeUserMenu();
  } else {
    openUserMenu();
  }
});

document.addEventListener("click", (e) => {
  if (menuOpen && !userMenuWrapper.contains(e.target)) {
    closeUserMenu();
  }
});
