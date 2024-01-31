"use strict";

const input = document.querySelector("#controls input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// createButton.addEventListener("click", createBoxes);
createButton.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
  input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  // amount = input.value;

  if (amount > 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");

      const size = 30 + i * 10;
      const color = getRandomHexColor();

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = color;

      boxesContainer.appendChild(box);
    }
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
