document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = (element) => {
    const file = element.getAttribute("data-include");
    if (file) {
      fetch(file)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`No se pudo cargar el componente: ${file}`);
          }
          return response.text();
        })
        .then((html) => {
          element.outerHTML = html;
          // Después de cargar el componente, podemos ejecutar scripts específicos si es necesario
          // Por ejemplo, para reinicializar los listeners de eventos del sidebar.
          // Esto es importante porque el script principal.js se ejecuta antes de que este contenido exista.
          const event = new CustomEvent("componentLoaded", {
            detail: { file: file },
          });
          document.dispatchEvent(event);
        })
        .catch((error) => {
          console.error(error);
          element.innerHTML = `<p style="color: red;">Error al cargar ${file}</p>`;
        });
    }
  };

  // Buscar todos los elementos que quieran incluir un componente
  document
    .querySelectorAll("[data-include]")
    .forEach((el) => loadComponent(el));
});