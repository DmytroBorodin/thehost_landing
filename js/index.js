const appWrapper = document.querySelector(".app__wrapper");
const opentBtn = document.querySelector(".open__btn");
const body = document.querySelector("body");
const bodyBlock = document.querySelector(".body");

opentBtn.addEventListener("click", () => {
  if (window.innerWidth <= 375) {
    console.log(window.innerWidth);
    body.classList.toggle("locked");
    bodyBlock.classList.toggle("locked");
    opentBtn.classList.toggle("active");
    appWrapper.classList.toggle("active");
  } else {
    opentBtn.classList.toggle("active");
    appWrapper.classList.toggle("active");
  }
});
