import fetchDrinks from "./fetchDrinks.js";
import get from "./getElement.js";
import { showLoading, hideLoading } from "./toggleLoading.js";

async function displaySingleDrink(url) {
  const data = await fetchDrinks(url);
  hideLoading();
  const drink = data.drinks[0];
  console.log(drink);

  // srtDrinkThumb
  // strDrink
  // strInstructions

  const list = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5];

  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");

  img.src = drink.strDrinkThumb;
  drinkName.textContent = drink.strDrink;
  description.textContent = drink.strInstructions;
  ingredients.innerHTML = list
    .map(ing => {
      if (!ing) return;
      return `<li><i class="far fa-check-square"></i>${ing}</li>`;
    })
    .join("");
}

export default displaySingleDrink;
