import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const id = localStorage.getItem("drink");
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

// if drink not in local storage, redirect to index
if (!id) {
  window.location.replace("index.html");
}

// load drink
window.addEventListener("DOMContentLoaded", () => displayDrink(url));
