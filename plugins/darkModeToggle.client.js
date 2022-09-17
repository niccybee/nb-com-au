// import Vue from "vue";

let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let theme = dark ? "dark" : "light";
console.log(theme);
document.body.classList.add(theme);

// const toggle = document.getElementById("dark-toggle");

// toggle.addEventListener("click", () => {
//   if (theme === "light") return;
//   de.classList.add("dark");
// });

export default ({ app }, inject) => {
  inject("darkTheme", bool => {
    console.log("init theme");
    if (!bool) return;
    de.classList.add("dark");
    console.log("dark mode");
  });
};
