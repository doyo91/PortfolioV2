sal();

// Dark mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("dark-mode-toggle");

const handleDarkMode = () => {
  document.body.classList.toggle("darkmode");
  document.body.classList.contains("darkmode")
    ? localStorage.setItem("darkMode", "enabled")
    : localStorage.setItem("darkMode", null);
};

darkMode === "enabled" && handleDarkMode();

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  handleDarkMode();
});

// Dia descripción
const days = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

let currentDay = new Date().getDay();
document.getElementById("day").innerHTML = days[currentDay];

// Año footer
let currentYear = new Date().getFullYear();
document.getElementsByClassName(
  "footer__currentYear"
)[0].innerHTML = currentYear;
