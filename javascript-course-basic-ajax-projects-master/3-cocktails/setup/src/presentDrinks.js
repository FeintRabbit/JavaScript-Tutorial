import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

async function presentDrinks(url) {
  // fetch drinks
  const drinks = await fetchDrinks(url);
  // display drinks
  const section = await displayDrinks(drinks);
  if (section) {
    setDrink(section);
  }
}

export default presentDrinks;
