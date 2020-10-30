// only difference in two counters, in the parent container class

// create class
class Counter {
  constructor(element, initialValue = 0) {
    this.element = document.querySelector(element);
    this.count = initialValue;

    // target DOM elements
    this.counter = this.element.querySelector(".value");
    this.increasebtn = this.element.querySelector(".increase");
    this.decreasebtn = this.element.querySelector(".decrease");
    this.resetbtn = this.element.querySelector(".reset");

    // add evt listeners
    this.increasebtn.addEventListener("click", this.increase);
    this.decreasebtn.addEventListener("click", this.decrease);
    this.resetbtn.addEventListener("click", this.reset);
  }

  // set-up evt methods
  increase = () => {
    this.count++;
    this.counter.innerHTML = this.count;
  };
  decrease = () => {
    this.count--;
    this.counter.innerHTML = this.count;
  };
  reset = () => {
    this.count = 0;
    this.counter.innerHTML = this.count;
  };
}

const first = new Counter(".first-counter");
const second = new Counter(".second-counter");

// getElement helper
function getElement(selection) {
  // run queryselector
  const element = document.querySelector(selection);
  // if exists, return val. If not, throw error.
  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}" selector, no such element exists`);
}
