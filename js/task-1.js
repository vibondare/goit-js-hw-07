"use strict";

const categories = document.querySelectorAll("#categories .item");
// const categoriesNames = document.querySelectorAll('.item h2');

// let amountOfCategories = 0;
// categories.forEach(category => amountOfCategories += 1);

function showAmountOfCategories() {
  return `Number of categories: ${categories.length}`;
}

console.log(showAmountOfCategories());

let amountOfElements = 0;
categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const amountOfElements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${amountOfElements}`);
});
