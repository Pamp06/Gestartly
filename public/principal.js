const sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");
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

// Sidebar móvil
if (menuBtn && sidebar && overlay) {
  menuBtn.addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);
}
if (closeBtn && sidebar && overlay) {
  closeBtn.addEventListener("click", closeSidebar);
}

// Menú usuario
if (userMenuBtn && userDropdown && arrowIcon && userMenuWrapper) {
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
}

// Menu desplegable Nuevo archivo

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("bdesplegable");
  const menu = document.getElementById("mdesplegable");

  if (btn && menu) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = menu.classList.contains("opacity-100");
      if (isOpen) {
        menu.classList.remove(
          "opacity-100",
          "scale-y-100",
          "pointer-events-auto"
        );
        menu.classList.add("opacity-0", "scale-y-0", "pointer-events-none");
      } else {
        menu.classList.add("opacity-100", "scale-y-100", "pointer-events-auto");
        menu.classList.remove("opacity-0", "scale-y-0", "pointer-events-none");
      }
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove(
          "opacity-100",
          "scale-y-100",
          "pointer-events-auto"
        );
        menu.classList.add("opacity-0", "scale-y-0", "pointer-events-none");
      }
    });
  }
});
