# NOTES:

## DOM Projects

Project 8 (menu)

- Good use of arr methods for displaying JSON data on DOM
- Map(), looping over JSON data and building HTML for innerhtml insert to DOM
- Filter(), on event (click btn) filter data then call the above for filtered data
- Reduce(), start with arr ['all'] then add vals based on condition

Project 11 (tabs)

- Example of using event delegation to manipulate child elements from a delegated parent

Project 14 (grocery bud to-do list)

- Add to DOM - Adding item to the DOM is done line-by-line for each element (not using map all the HTML blob)
- Event delegation - avoiding event delegation for the buttons, by adding event listeners as they are added to the DOM
- JSON stringify & parse, CRUD values in local storage
- minor use of filter & map

## OOP Projects

Project 2 (Gallery)

- 'this' for event listeners on a class. Directing 'this' within a callback function. Two methods;
  - '.bind(this)' - bind the whole callback function codeblock to 'this' (of the class)
  - 'let self = this;' - declare a variable 'self' on the class which refs the class 'this', then use in place of 'this' within the callback, negating the need for 'this'.

Project 3

- Ideal Class usage. Setting up methods using appropriate normal or arrow functions (Not using .bind())

## AJAX Projects

Project 1 (joke)

- AJAX using the promise, fetch & async/await methods
