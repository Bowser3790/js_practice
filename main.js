let Phrase = require("learnenough-palindrome");

function palindromeTester() {
  event.preventDefault();


  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");


  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome`;
  }
}




//   alert(`"${phrase.content}" is a palindrome!!!`);
// } else {
//   alert(`"${phrase.content}" is not a palindrome.`);
// }

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function() {
    palindromeTester(event);
  });
});
