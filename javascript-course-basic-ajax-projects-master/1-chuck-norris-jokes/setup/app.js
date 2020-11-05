const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");

const url = "https://api.chucknorris.io/jokes/random";

// *** Fetch + Async/await ***

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
});

function displayData(data) {
  img.classList.add("shake-img");
  const joke = data.value;
  content.textContent = joke;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, Math.random() * 1000);
}

// ================================================================= //

// // *** Fetch + Promise ***

// // fetch defaults to a 'GET' request, returns a 'response' object
// // response.json() is a promise, so needs a .then to handle data
// btn.addEventListener("click", () => {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => displayData(data))
//     .catch(err => console.log(err));
// });

// function displayData(data) {
//   img.classList.add("shake-img");
//   const joke = data.value;
//   content.textContent = joke;
//   setTimeout(() => {
//     img.classList.remove("shake-img");
//   }, Math.random() * 1000);
// }

// ================================================================= //

// // *** XHR + Promise ***

// btn.addEventListener("click", () => {
//   getData(url)
//     .then(response => displayData(response))
//     .catch(err => console.log(err));
// });

// function getData(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", url);
//     xhr.send();

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState !== 4) return;
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject({
//           status: xhr.status,
//           text: xhr.statusText,
//         });
//       }
//     };
//   });
// }

// function displayData(data) {
//   img.classList.add("shake-img");
//   const joke = data.value;
//   content.textContent = joke;
//   setTimeout(() => {
//     img.classList.remove("shake-img");
//   }, Math.random() * 1000);
// }

// ================================================================= //

// // *** XHR ***

// btn.addEventListener("click", () => {
//   getData(url)
// });

// function getData(url) {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", url);
//   xhr.send();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== 4) return;
//     if (xhr.status === 200) {
//       img.classList.add("shake-img");
//       const joke = JSON.parse(xhr.responseText).value;
//       content.textContent = joke;
//       setTimeout(() => {
//         img.classList.remove("shake-img");
//       }, Math.random() * 1000);
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//       });
//     }
//   };
// }
