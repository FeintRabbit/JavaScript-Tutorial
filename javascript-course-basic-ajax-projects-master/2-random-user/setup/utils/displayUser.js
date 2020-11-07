import getElement from "./getElement.js";

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btns = [...document.querySelectorAll(".icon")];

function displayUser(person) {
  // initial load, set image & select name
  // update image
  img.src = person.image;
  // set to default name & active
  title.textContent = `My name is`;
  value.textContent = person.name;
  // remove active from all btns
  btns.forEach(btn => btn.classList.remove("active"));
  // set name btn to active
  btns[0].classList.add("active");

  // add btns for other data points to be selected
  btns.forEach(btn => {
    btn.addEventListener("click", e => {
      // remove active from all btns
      btns.forEach(btn => btn.classList.remove("active"));
      // set btn to active
      e.currentTarget.classList.add("active");
      // update title & value
      const label = e.currentTarget.dataset.label;
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
    });
  });
}

export default displayUser;
