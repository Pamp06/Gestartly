document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = async (element) => {
    const file = element.getAttribute("data-include");
    if (!file) return;

    const cacheKey = `gestartly_component_${file}`;
    const cachedContent = localStorage.getItem(cacheKey);

    // Función auxiliar para notificar que el componente se cargó
    const dispatchLoaded = () => {
      const event = new CustomEvent("componentLoaded", {
        detail: { file: file },
      });
      document.dispatchEvent(event);
    };

    //* ESTRATEGIA: Cache-First (Guarda en Cache el Header y el Sidebar, cuando se recarguen nuevamente la proxima
    //* vez buscara si estan guardados ambos componentes para no recargarlos sino tomarlos de la cache directamente)

    if (cachedContent) {
      // 1. Si hay cache, renderizar INMEDIATAMENTE (elimina el parpadeo)
      element.outerHTML = cachedContent;
      dispatchLoaded();

      // 2. Revalidar en segundo plano para actualizar el caché si el archivo cambió
      try {
        const response = await fetch(file);
        if (response.ok) {
          const html = await response.text();
          if (html !== cachedContent) {
            localStorage.setItem(cacheKey, html);
            console.log(`Caché actualizado para ${file}. Se verá en la próxima recarga.`);
          }
        }
      } catch (err) {
        console.warn(`No se pudo revalidar ${file} en segundo plano`, err);
      }
    } else {
      // 3. Si no hay caché (primera visita), carga normal
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`No se pudo cargar el componente: ${file}`);
        const html = await response.text();
        
        element.outerHTML = html;
        localStorage.setItem(cacheKey, html); // Guardamos en caché para la próxima
        dispatchLoaded();
      } catch (error) {
        console.error(error);
        element.innerHTML = `<p style="color: red;">Error al cargar ${file}</p>`;
      }
    }
  };

  // Buscar todos los elementos que quieran incluir un componente
  document
    .querySelectorAll("[data-include]")
    .forEach((el) => loadComponent(el));
});