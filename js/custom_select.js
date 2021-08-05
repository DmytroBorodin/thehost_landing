let customSelectBlock = document.querySelectorAll(".custom__select__block");

function changeSelectTitle(option, titleEl) {
  option.addEventListener("click", () => {
    let title = titleEl.innerText;
    let name = titleEl.getAttribute("data-name");
    let value = option.getAttribute("value");
    let optionName = option.innerText;
    titleEl.innerText = value;
    titleEl.setAttribute("data-name", optionName);
    option.innerText = name;
    option.setAttribute("value", title);
  });
}

customSelectBlock.forEach((block) => {
  let customOptions = [...block.querySelectorAll(".custom__option")];
  let customTitleElement = block.querySelector(".title__val");

  customOptions.forEach((option) => {
    changeSelectTitle(option, customTitleElement);
  });

  block.addEventListener("click", () => {
    block.classList.toggle("active");
  });
});
