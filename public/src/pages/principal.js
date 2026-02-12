/**
 * Este script inicializa los listeners de eventos para los elementos del Topbar.
 * Esto incluye el menú de usuario y el botón del menu móvil.
 */
function initializeTopbarLogic() {
  const userMenuBtn = document.getElementById("userMenuBtn");
  const userDropdown = document.getElementById("userDropdown");
  const arrowIcon = document.getElementById("arrowIcon");
  const userMenuWrapper = document.getElementById("userMenuWrapper");
  const menuBtn = document.getElementById("menuBtn");

  // --- Lógica del Menu de Usuario ---
  if (userMenuBtn && userDropdown && arrowIcon && userMenuWrapper) {
    let menuOpen = false;

    const openUserMenu = () => {
      userDropdown.classList.remove("scale-95", "opacity-0", "pointer-events-none");
      userDropdown.classList.add("scale-100", "opacity-100", "pointer-events-auto");
      arrowIcon.classList.add("rotate-180");
      menuOpen = true;
    };
 
    const closeUserMenu = () => {
      userDropdown.classList.add("scale-95", "opacity-0", "pointer-events-none");
      userDropdown.classList.remove("scale-100", "opacity-100", "pointer-events-auto");
      arrowIcon.classList.remove("rotate-180");
      menuOpen = false;
    };

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

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  // --- Lógica del Sidebar móvil ---
  if (sidebar && overlay && menuBtn && closeBtn) {
    const openSidebar = () => {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    };

    const closeSidebar = () => {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    };

    menuBtn.addEventListener("click", openSidebar);
    overlay.addEventListener("click", closeSidebar);
    closeBtn.addEventListener("click", closeSidebar);
  }
}

/**
 * Inicializa los listeners de eventos para los elementos del Sidebar.
 * Esto incluye el boton de cerrar y el menú desplegable "Nuevo archivo".
 */
function initializeSidebarLogic() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const bdesplegable = document.getElementById("bdesplegable");
  const mdesplegable = document.getElementById("mdesplegable");
  const menuBtn = document.getElementById("menuBtn");

  // --- Lógica del Menú desplegable "Nuevo archivo" ---
  if (bdesplegable && mdesplegable) {
    bdesplegable.addEventListener("click", function (e) {
      e.stopPropagation();
      mdesplegable.classList.toggle("opacity-0");
      mdesplegable.classList.toggle("scale-y-0");
      mdesplegable.classList.toggle("pointer-events-none");
      mdesplegable.classList.toggle("opacity-100");
      mdesplegable.classList.toggle("scale-y-100");
      mdesplegable.classList.toggle("pointer-events-auto");
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", function (e) {
      const isOpen = mdesplegable.classList.contains("opacity-100");
      if (isOpen && !mdesplegable.contains(e.target) && !bdesplegable.contains(e.target)) {
        mdesplegable.classList.add("opacity-0", "scale-y-0", "pointer-events-none");
        mdesplegable.classList.remove("opacity-100", "scale-y-100", "pointer-events-auto");
      }
    });
  }

  // --- Lógica del Sidebar móvil (reubicada para mayor claridad) ---
  if (sidebar && overlay && menuBtn && closeBtn) {
    const openSidebar = () => {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    };

    const closeSidebar = () => {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    };

    // Aseguramos que los listeners no se dupliquen
    if (!menuBtn.dataset.listenerAttached) {
      menuBtn.addEventListener("click", openSidebar);
      menuBtn.dataset.listenerAttached = "true";
    }
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
  }
}

// Escuchamos el evento personalizado que dispara `component-loader.js 
//* Aqui tambien se pueden editar las rutas hacia los componentes dinamicos topbar y sidebar`

document.addEventListener("componentLoaded", (event) => {
  if (event.detail.file === "components/topbar-component.html") {
    initializeTopbarLogic();
  } else if (event.detail.file === "components/sidebar-component.html") {
    initializeSidebarLogic();
  }
});
