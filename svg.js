"use strict";

//Работа с цветами в поле SVG
const colors = [
  { color: '#ff0000', image: 'Pic/pencil_red.png' },
  { color: '#ffa500', image: 'Pic/pencil_orange.png' },
  { color: '#ffff00', image: 'Pic/pencil_yellow.png' },
  { color: '#008000', image: 'Pic/pencil_green.png' },
  { color: '#0000ff', image: 'Pic/pencil_blue.png' },
  { color: '#00008b', image: 'Pic/pencil_dark_blue.png' },
  { color: '#800080', image: 'Pic/pencil_purple.png' },
];
function renderColorPalette() {
  const paletteContainer = document.querySelector(".palette");
  const colorsItems = colors
    .map(n => `
    <button
      style="background-image: url(${n.image})"
      class="palette-button"
      data-color="${n.color}">
    </button>`)
    .join('');
  paletteContainer.innerHTML = colorsItems;
}
function handleClickOnColor(event) {
  const button = event.target.closest(".palette-button");
  if (!button) return;
  const oldActiveButton = document.querySelector(".palette-button-active");
  if (oldActiveButton) {
    oldActiveButton.classList.remove("palette-button-active");
  }
  button.classList.add("palette-button-active");
}
function setEventsOnFilledElements() {
  function handleMouseEnter() {
    this.classList.add("selected");
  }
  function handleMouseLeave() {
    this.classList.remove("selected");
  }
  const elements = document.querySelectorAll("*[fill]");
  function handleClick() {
    const currentColor = document.querySelector(".palette-button-active");
    if (!currentColor) {
      alert("Цвет не выбран");
      return;
    }
    const save = { elem: this, color: this.getAttribute("fill") };
    stateStack.push(save);
    this.setAttribute("fill", currentColor.dataset.color);
    if ([...elements].every(ep => ep.getAttribute('fill') != '#ffffff')) {
      tick();
      let time = document.getElementById('play_timer').innerHTML;
      localStorage.setItem("time", time);
      setTimeout(() => alert('Вы всё закрасили!'));
      location.href = "/rekord.html";
    }
  }
  elements.forEach(element => {
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("click", handleClick);
  });
}
document.addEventListener("DOMContentLoaded", renderColorPalette);
document.addEventListener("click", handleClickOnColor);
document.addEventListener("DOMContentLoaded", setEventsOnFilledElements);
function check() {
  const { length } = [...document.querySelectorAll("*[fill]")].filter(ep => ep.getAttribute('fill') == '#ffffff');
  const txt = length ? `Ещё ${length} фигур не закрашено` : 'Вы всё закрасили!'
  alert(txt)
}
const stateStack = []
function rev() {
  if (stateStack.length) {
    const { elem, color } = stateStack.pop();
    elem.setAttribute("fill", color)
  }
}
