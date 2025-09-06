import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Datos de configuracion del Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAkkRZ0jku2cav6MVcNJjJ0_dtufg6nk2Y",
  authDomain: "documentosweb1-5df51.firebaseapp.com",
  projectId: "documentosweb1-5df51",
  storageBucket: "documentosweb1-5df51.firebasestorage.app",
  messagingSenderId: "302397078724",
  appId: "1:302397078724:web:7777ecdd311c2ad4049d91",
  measurementId: "G-KM6NCNXG9P",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtén la instancia de autenticación

// Referencias a los elementos HTML
const emailInput = document.getElementById("correo");
const passwordInput = document.getElementById("pass");
const loginButton = document.getElementById("btn-login");
const messageParagraph = document.getElementById("message");
const passInput = document.getElementById("pass");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

// Al cargar la página, intenta login automático si hay datos guardados
/*window.addEventListener("DOMContentLoaded", async () => {
  const savedEmail = localStorage.getItem("recuerdame");
  const savedPass = localStorage.getItem("recuerdamePass");
  if (savedEmail && savedPass) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        savedEmail.trim().toLowerCase().replace(/\s+/g, ""),
        savedPass
      );
      window.location.href = "coffee-shop-html-template/index.html";
    } catch (error) {
      console.error("Error auto-login:", error.message);
      // Limpia datos si el login automático falla
      localStorage.removeItem("recuerdame");
      localStorage.removeItem("recuerdamePass");
    }
  }
});*/

function showMessage(msg, isError = false) {
  messageParagraph.style.color = isError ? "red" : "green";
  if (msg) {
    messageParagraph.textContent = msg;
    // Fade in
    messageParagraph.classList.remove("opacity-0", "translate-y-4");
    messageParagraph.classList.add("opacity-100", "translate-y-0");
    // Fade out después de 5 segundos
    setTimeout(() => {
      messageParagraph.classList.remove("opacity-100", "translate-y-0");
      messageParagraph.classList.add("opacity-0", "translate-y-4");
      // Limpia el texto después del fade out (500ms)
      setTimeout(() => {
        messageParagraph.textContent = "";
      }, 500);
    }, 5000);
  } else {
    // Fade out inmediato si no hay mensaje
    messageParagraph.classList.remove("opacity-100", "translate-y-0");
    messageParagraph.classList.add("opacity-0", "translate-y-4");
    setTimeout(() => {
      messageParagraph.textContent = "";
    }, 500);
  }
}

// Escuchar el clic del botón de INICIAR SESIÓN
loginButton.addEventListener("click", async () => {
  // Limpia espacios y convierte a minúsculas
  const email = emailInput.value.trim().toLowerCase().replace(/\s+/g, "");
  const password = passwordInput.value;

  if (!email || !password) {
    showMessage("Por favor, ingresa tu correo y contraseña.", true);
    return;
  }

  try {
    // Intenta iniciar sesión con el email y la contraseña proporcionados
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // OPCIONAL Si el inicio de sesión es exitoso, muestra un mensaje de bienvenida
    /*showMessage(
      `¡Bienvenido, Maestro! Sesión iniciada como: ${userCredential.user.email}`
    );*/

    // Esto redirige al navegador a la página 'generic.html'
    window.location.href = "principal.html";
  } catch (error) {
    // Si ocurre un error, lo registramos en la consola para depuración
    console.error("Error al iniciar sesión:", error.message);

    // Y mostramos un mensaje amigable al usuario basado en el tipo de error
    if (
      error.code === "auth/user-not-found" ||
      error.code === "auth/wrong-password" ||
      error.code === "auth/invalid-credential"
    ) {
      showMessage("Verifica tu correo y contraseña.", true);
    } else if (error.code === "auth/invalid-email") {
      showMessage("El formato del correo es inválido.", true);
    } else {
      // Para otros errores no esperados, muestra el mensaje de Firebase
      showMessage(`Error: ${error.message}`, true);
    }
  }
});

togglePassword.addEventListener("click", () => {
  const isPassword = passInput.type === "password";
  passInput.type = isPassword ? "text" : "password";
  eyeIcon.src = isPassword ? "img/openeye.png" : "img/closeeye.png";
  eyeIcon.alt = isPassword ? "Ocultar contraseña" : "Mostrar contraseña";
});
