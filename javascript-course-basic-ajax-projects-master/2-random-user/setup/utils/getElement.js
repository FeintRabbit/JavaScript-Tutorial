function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`No element: ${selector}`);
}

export default getElement;
