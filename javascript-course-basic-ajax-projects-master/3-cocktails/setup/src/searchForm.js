import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const input = get('[name="drink"]');

form.addEventListener("keyup", e => {
  e.preventDefault();
  if (!input.value) return;
  presentDrinks(`${baseUrl}${input.value}`);
});
