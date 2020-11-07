import get from "./getElement.js";
import { showLoading, hideLoading } from "./toggleLoading.js";

function displayDrinks({ drinks }) {
  const section = get(".section-center");
  const title = get(".title");
  // if no results returned, display error & clear results
  if (!drinks) {
    hideLoading();
    title.textContent = "sorry, so drinks matched your search";
    section.innerHTML = null;
    return;
  }
  // if results returned, return html blob
  const newDrinks = drinks
    .map(drink => {
      return `
      <a href="drink.html">
          <article class="cocktail" data-id="${drink.idDrink}">
            <img src="${drink.strDrinkThumb}" alt="cocktail" />
            <h3>${drink.strDrink}</h3>
          </article>
        </a>`;
    })
    .join("");
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
}

export default displayDrinks;
