import getElement from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
import displayUser from "./utils/displayUser.js";

const url = "https://randomuser.me/api/";

// target DOM
const btn = getElement(".btn");

// on load & random button click
window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);

async function showUser() {
  // get user from api (getUser is async, returns a promise)
  const person = await getUser(url);
  // display user
  displayUser(person);
}
