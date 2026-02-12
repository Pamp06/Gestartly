![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# 🚀 Gestartly

**Gestartly** es un proyecto web desarrollado con **JavaScript moderno**, **Firebase**, **Supabase** y **Tailwind CSS**. Enfocado en la gestión y análisis de datos de manera eficiente evitando la dependencia pura de documentos físicos.

![Login](https://github.com/user-attachments/assets/e8aaca73-3fb2-4372-b009-a8233e20d336)

[Enlace a la página](https://gestartlyweb.web.app/)

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

1. **Node.js**: Necesario para gestionar los paquetes de Firebase y el compilador de Tailwind.
   - [Descargar Node.js (LTS)](https://nodejs.org/)
   *- Verifica la instalación con: `node -v` y `npm -v`*

---

## ⚙️ Configuración de Firebase

Sigue estos pasos para conectar el proyecto con los servicios de Google Cloud/Firebase:

### 1. Instalación de Firebase Tools
Instala las utilidades globales de Firebase en tu terminal:
```bash
npm install -g firebase-tools
```

### 2. Autenticación e Inicialización
Logueo: Inicia sesión con tu cuenta de Google:

```bash
firebase login
```
Inicialización: Vincula este repositorio con tu proyecto actual:

```bash
firebase init
```
*(Asegúrate de seleccionar el ID de proyecto de tu consola de Firebase).*

## 🎨Instalación y Uso del CLI de Tailwind

### 1-Instalar Tailwind CSS
Instalar *tailwindcssy* y *@tailwindcss/climediante* mediante npm.

```bash
npm install tailwindcss @tailwindcss/cli
```

### 2-Importa Tailwind en tu CSS
Agregue la *'@import "tailwindcss";'* importación a su archivo CSS principal.

Cree el archivo *input.css*, luego agregue la siguiente y unica linea al mismo archivo:

```bash
@import "tailwindcss";
```

### 3-Iniciar el proceso de compilación de Tailwind CLI
Para que los estilos se apliquen correctamente durante el desarrollo, debes compilar las clases de Tailwind.

Compilación en Tiempo Real **(Watch Mode)**
Ejecuta este comando en una terminal de VS Code mientras programas. Este "observará" tus cambios en el HTML y aplicara los estilos de las clases a la página:

```bash
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```
*Nota: Ajusta las rutas ./src/input.css y ./dist/output.css según la ubicación real de tus archivos de Tailwind.*

### 4-Comience a usar Tailwind en su HTML
En los archivos HTML donde quiera utilizar las clases de Tailwind siempre debera agregar la siguiente línea dentro del *Head*

```bash
<link href="./output.css" rel="stylesheet">
```

### Ejemplo de como se deberia ver:

```bash
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet"> <---------- Línea para el uso de las Clases de Tailwind
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
