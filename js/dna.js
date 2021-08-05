const menu = document.querySelector(".menu__wrapper");
const burgerBtn = document.querySelector(".burger");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("locked");
});

const filterBtns = [...document.querySelectorAll(".filter__btn")];
const filteredElems = [...document.querySelectorAll(".help__block")];

let filters = [];
let filterStr = "";

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    let value = `${btn.querySelector("span").innerText} `;
    if (btn.classList.contains("active")) {
      filters.push(value);
      filterStr = filters.join(" ");
    } else {
      filters.splice(filters.indexOf(value), 1);
      filterStr = filters.join(" ");
    }
    filterBlocks(filterStr, filteredElems);
  });
});

function filterBlocks(filters, blocksArr) {
  blocksArr.forEach((block) => {
    let value = block.getAttribute("value");
    if (!filters.length) {
      block.style.display = "flex";
    } else {
      if (filters.includes(value)) {
        block.style.display = "flex";
      } else {
        block.style.display = "none";
      }
    }
  });
}
