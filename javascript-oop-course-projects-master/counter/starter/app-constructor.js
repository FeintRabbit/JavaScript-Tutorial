// only difference in two counters, in the parent container class

// ***** constructor function example *****

function Counter(element, value) {
  // set this 'counter' to the parent element on the page
  this.counter = element;
  // set the counter initial value (used ongoing to store count)
  this.value = value;
  // target the buttons (of this element)
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  // set the value of the DOM counter element
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;

  // add event listeners (done on the per object level)
  // shorter way (bind in the listener)
  this.increaseBtn.addEventListener("click", this.increase.bind(this));
  // longer way (set function, then add to listener)
  this.decrease = this.decrease.bind(this);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.reset = this.reset.bind(this);
  this.resetBtn.addEventListener("click", this.reset);
}
// set functions
Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

// create each button object
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
console.log(firstCounter);

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
