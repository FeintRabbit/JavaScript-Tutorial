function getElement(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    throw Error(`Element not found: "${selector}`);
  }
  return element;
}

export default getElement;
