// Este script debe cargarse en el <head> para evitar el "flash of unstyled content" (FOUC).

const THEME_KEY = 'theme-preference';

/**
 * Aplica el tema (claro u oscuro) al documento.
 * @param {string} theme - El tema a aplicar ('dark' o 'light').
 */
function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
}

/**
 * Obtiene la preferencia de tema guardada o la del sistema.
 * @returns {'dark' | 'light'}
 */
function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    return savedTheme;
  }
  // Si no hay tema guardado, usa la preferencia del sistema
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Aplica el tema inicial tan pronto como sea posible
const initialTheme = getInitialTheme();
applyTheme(initialTheme);

// Escucha los cambios en el DOM para configurar el toggle
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('#theme-toggle');
  if (themeToggle) {
    // Sincroniza el estado del toggle con el tema actual
    themeToggle.checked = initialTheme === 'dark';

    themeToggle.addEventListener('change', () => {
      const newTheme = themeToggle.checked ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, newTheme);
      applyTheme(newTheme);
    });
  }
});