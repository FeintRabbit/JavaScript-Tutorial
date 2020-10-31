// importing a named export
// needs the curly braces
// Infinite number of exports
import { random, people } from "../module-example/data.js";
console.log(random, people); // data from module

// importing a default export
// no curly braces, can reassign name for this file
// only one per file
import showPeople from "../module-example/showPeople.js";
console.log(showPeople); // function from module
import getElement from "../module-example/getElement.js";

const container = getElement(".container");
const btn = getElement(".btn2");

btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});
