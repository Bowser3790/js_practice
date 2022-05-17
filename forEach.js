// let a = ["ant", "bat", "cat", 42];
// a.forEach(function(element) {
//   console.log(element);
// });

// let soliloquy= "to be or not to be that is the question:";
// for (let i = 0; i < soliloquy.length; i++) {
//   console.log(soliloquy.charAt(i));
// }


// This is the same output

let soliloquy= "to be or not to be that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});
