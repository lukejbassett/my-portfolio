// const hamburger = document.querySelector(".hamburger");
// const menu = document.querySelector(".nav");
// hamburger.addEventListener("click", function () {
//   this.classList.toggle("is-active");
//   menu.classList.toggle("is-active");
// });
// document.querySelectorAll(".menu").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("is-active");
//     menu.classList.remove("is-active");
//   })
// );

const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".main-nav");
btn.addEventListener("click", function () {
  btn.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
// document.querySelectorAll(".menu").forEach((n) =>
//   n.addEventListener("click", () => {
//     btn.classList.remove("is-active");
//     menu.classList.remove("is-active");
//   })
// );
