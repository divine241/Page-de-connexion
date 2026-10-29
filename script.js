const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formMessage = document.getElementById("form-message");
const passwordToggle = document.getElementById("password-toggle");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

passwordToggle.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  passwordToggle.textContent = isPassword ? "Masquer" : "Afficher";
  passwordToggle.setAttribute("aria-label", isPassword ? "Masquer le mot de passe" : "Afficher le mot de passe");
  passwordToggle.setAttribute("aria-pressed", String(isPassword));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";
  formMessage.className = "form-message";

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  let isValid = true;

  if (email === "") {
    emailError.textContent = "Veuillez saisir votre adresse e-mail.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Veuillez saisir une adresse e-mail valide.";
    isValid = false;
  }

  if (password === "") {
    passwordError.textContent = "Veuillez saisir votre mot de passe.";
    isValid = false;
  }

  if (!isValid) {
    formMessage.textContent = "Veuillez corriger les erreurs ci-dessus.";
    formMessage.classList.add("error");
    return;
  }

  formMessage.textContent = "Connexion validée (démonstration).";
  formMessage.classList.add("success");
  form.reset();
});
