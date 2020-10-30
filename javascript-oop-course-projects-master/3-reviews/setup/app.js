// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

class Review {
  constructor(element, personId = 0) {
    this.element = document.querySelector(element);
    this.personId = personId;
    // DOM elements
    this.authorImg = this.element.querySelector("#person-img");
    this.author = this.element.querySelector("#author");
    this.job = this.element.querySelector("#job");
    this.info = this.element.querySelector("#info");

    // load
    this.load();

    // BTNs
    this.nextBtn = this.element.querySelector(".next-btn");
    this.prevBtn = this.element.querySelector(".prev-btn");
    this.randBtn = this.element.querySelector(".random-btn");

    // add event listeners
    this.nextBtn.addEventListener("click", () => this.next());
    this.prevBtn.addEventListener("click", () => this.prev());
    this.randBtn.addEventListener("click", () => this.rand());
  }
  // DOM load function
  load() {
    this.authorImg.src = reviews[this.personId].img;
    this.author.textContent = reviews[this.personId].name;
    this.job.textContent = reviews[this.personId].job;
    this.info.textContent = reviews[this.personId].text;
  }
  // event buttons
  next() {
    this.personId++;
    if (this.personId > reviews.length - 1) {
      this.personId = 0;
    }
    this.load();
  }
  prev() {
    this.personId--;
    if (this.personId < 0) {
      this.personId = reviews.length - 1;
    }
    this.load();
  }
  rand() {
    this.personId = Math.floor(Math.random() * reviews.length);
    this.load();
  }
}

const reviews1 = new Review(".review-1");
console.log(reviews1);
const reviews2 = new Review(".review-2", 3);
console.log(reviews2);
