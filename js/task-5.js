"use strict";

const changeColorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorCode = document.querySelector(".color");

changeColorButton.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const generatedColor = getRandomHexColor();
  body.style.backgroundColor = generatedColor;
  colorCode.textContent = generatedColor;
}
