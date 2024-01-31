"use strict";

const inputForName = document.querySelector("#name-input");
const outputForName = document.querySelector("#name-output");

inputForName.addEventListener("input", () => {
  const name = inputForName.value.trim();
  outputForName.textContent = name === "" ? "Anonymous" : name;
});
