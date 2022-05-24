let Phrase = require("learnenough-palindrome");

function palindromeTester() {
  let string = prompt("Please enter a palindrome!");
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");


  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome`;
  }
}




//   alert(`"${phrase.content}" is a palindrome!!!`);
// } else {
//   alert(`"${phrase.content}" is not a palindrome.`);
// }

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function() {
    palindromeTester();
  });
});
