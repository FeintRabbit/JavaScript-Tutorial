// get element function
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}" selector, no such element exists`);
}

function Gallery(element) {
  this.container = element;
  // target all images of the gallery
  this.list = [...element.querySelectorAll(".img")];
  // target modal & elements (one on the doc, not per each gallery)
  this.modal = getElement(".modal");
  this.modalImg = getElement(".modal-img");
  this.imageName = getElement(".image-name");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");
  // self
  let self = this; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 1. set self = this (class ref) ✓
  // bind functions
  // this.closeModal = self.closeModal;
  // container event (not function bind-ed)
  this.container.addEventListener("click", function (e) {
    // if an image is clicked
    if (e.target.classList.contains("img")) {
      // open model, with target (img clicked) & list of all imgs in container
      self.openModal(e.target, self.list); // <<<<<<<<<<<<<<<< 2. call func, with ref to 'self' ✓
    }
  });
}
Gallery.prototype.openModal = function (selectedImage, list) {
  // 'this' is bound to the Gallery
  console.log(selectedImage, list);
  // set the small images
  this.modalImages.innerHTML = list // <<<<<<<<<<<<<<<< 3a. 'this' here refs to 'self' ✓
    .map(function (image) {
      return `<img src="${image.src}" title=${image.title}" data-id="${image.dataset.id}" 
      class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
    })
    .join("");

  // set main image
  this.setMainImage(selectedImage); // <<<<<<<<<<<<<<<< 3b. 'this' here refs to 'self' ✓
  this.modal.classList.add("open");

  // set event listeners
  this.closeBtn.addEventListener("click", this.closeModal); // 4. ⨉⨉⨉⨉⨉⨉⨉⨉⨉ at this point, 'this' is pointing at the btn, so using 'self' would fix. But func has no ref to 'self' anymore, due to being declared in the scope of the class. Binding this func is still needed.
  this.nextBtn.addEventListener("click", this.nextImage);
  this.prevBtn.addEventListener("click", this.prevImage);
};
Gallery.prototype.setMainImage = function (selectedImage) {
  // 'this' is bound to the Gallery
  // set the src & title from the selected img
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function () {
  // open model with class 'open'
  this.modal.classList.remove("open");
  // remove event listeners
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.nextBtn.removeEventListener("click", this.nextImage);
  this.prevBtn.removeEventListener("click", this.prevImage);
};
Gallery.prototype.nextImage = function () {
  //
};
Gallery.prototype.prevImage = function () {
  //
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
