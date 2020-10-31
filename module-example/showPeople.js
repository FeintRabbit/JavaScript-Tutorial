// function cannot directly manipulate value, so this function takes an argument & returns a new value

// version 1 - export at the bottom
const showPeople = people => {
  const newPeople = people
    .map(person => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join("");
  return newPeople;
};
// export default function
export default showPeople;

// version 2 - export default function, without naming it at all

// export default people => {
//   const newPeople = people
//     .map(person => {
//       const { name, job } = person;
//       return `<p>${name} <strong>${job}</strong></p>`;
//     })
//     .join("");
//   return newPeople;
// };
