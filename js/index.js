const appWrapper = document.querySelector(".app__wrapper");
const opentBtn = document.querySelector(".open__btn");
const body = document.querySelector(".body");

console.log(document.innerWidth);

opentBtn.addEventListener("click", () => {
  let width = window.innerWidth;
  console.log(width);
  if (window.innerWidth <= 375) {
    console.log(window.innerWidth);
    body.classList.toggle("locked");
    opentBtn.classList.toggle("active");
    appWrapper.classList.toggle("active");
  } else {
    opentBtn.classList.toggle("active");
    appWrapper.classList.toggle("active");
  }
});
