// dark mode
// const btn = document.getElementById("switch");
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// const currentTheme = localStorage.getItem("theme");
// if (currentTheme == "dark") {
//   document.body.classList.toggle("dark-theme");
// } else if (currentTheme == "light") {
//   document.body.classList.toggle("light-theme");
// }

// btn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     // document.body.classList.toggle("light-theme");
//     var theme = document.body.classList.contains("light-theme")
//       ? "light"
//       : "dark";
//   } else {
//     // document.body.classList.toggle("dark-theme");
//     var theme = document.body.classList.contains("dark-theme")
//       ? "dark"
//       : "light";
//   }
//   localStorage.setItem("theme", theme);
// });

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

// SAL JS
sal();
