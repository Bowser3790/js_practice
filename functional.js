let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Kansas -> Kansas
//North Dakota -> north-dakota

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

//urls: Imperative version
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(urlify(element));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));
//

//urls: Functional version
// function functionalUrls(elements) {
//   return elements.map(element => urlify(element));
// }
// console.log(functionalUrls(states));

function functionalMap(states) {
  return states.map(state => urlify(state));
}
function fullAddress(states) {
  return states.map(state => "https://example.com/" + state);
}
console.log(functionalMap(states));
console.log(fullAddress(functionalMap(states)));

//singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// sum imperative solution

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum functionalSum

function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n; }, 0);
}
console.log(functionalSum(numbers));


// lengths: Imperative solution

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  })
  return lengths;
}
console.log(imperativeLengths(states))

// Functional Solution

function funtionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(funtionalLengths(states));

// Using reduce, write a function that returns the product of all the elements
// in an array. Hint: Where += adds, *= multiplies.

function functionalProduct(elements) {
  return elements.reduce((total, n) => {return total *= n; }, 1);
}
console.log(functionalProduct(numbers));

// Remove the newlines in the reduce solution from Listing 6.9 to turn it into a
// single long line. Does it still give the right answer? How long is the
// resulting line of code?

let functionLength = "function functionalLengths(elements){return elements.reduce((lengths,element)=>{lengths[element]=element.length;return lengths;},{});}";
console.log(functionLength.length);
