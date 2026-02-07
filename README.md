![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# 🚀 Gestartly

**Gestartly** es un proyecto web desarrollado con **JavaScript moderno**, **Firebase** y **Tailwind CSS**. Enfocado en la gestión y análisis de datos de manera eficiente evitando la dependencia pura de documentos físicos.

![Login](https://github.com/user-attachments/assets/54b74adf-629a-4df4-94af-4cd0a654de2d)

[Enlace a la página](https://documentosweb1-5df51.firebaseapp.com)

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

1. **Node.js**: Necesario para gestionar los paquetes de Firebase y el compilador de Tailwind.
   - [Descargar Node.js (LTS)](https://nodejs.org/)
   - Verifica la instalación con: `node -v` y `npm -v`

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

(Asegúrate de seleccionar el ID de proyecto de tu consola de Firebase).

##🎨 Estilos con Tailwind CSS (CLI)
Para que los estilos se apliquen correctamente durante el desarrollo, debes compilar las clases de Tailwind.

Compilación en Tiempo Real (Watch Mode)
Ejecuta este comando en una terminal de VS Code mientras programas. Este "observará" tus cambios en el HTML y generará el archivo CSS final:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```
Nota: Ajusta las rutas ./src/input.css y ./dist/output.css según la ubicación real de tus archivos.