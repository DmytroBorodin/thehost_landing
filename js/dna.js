const menu = document.querySelector(".menu__wrapper");
const burgerBtn = document.querySelector(".burger");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("locked");
});
