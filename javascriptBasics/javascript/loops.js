//read through and memorizes the function and looks for syntax errors.

var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper ) + 1;
}

while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1;
}

document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " attempts to guess the number.</p>");


/*
//while loop: 

//then runs the program
//creates a variable and stores 0
var counter = 0;
//is the counter less than 100?
while (counter < 100) {
  var random = getRandomNumber(6);
  //writes to page
  document.write(random + " ");
  //increases counter
  counter += 1;
}
*/

//do/while loop:
var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;
 
//using break: 
while (guessCount < 5) {
  guess = prompt("I am thinking of a number between 1 and 10.  What is it?");
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
      correctGuess = true; //flag
      break;
    }
}

// do {
//   guess = prompt("I am thinking of a number between 1 and 10.  What is it?");
//   guessCount += 1;
//   if (parseInt(guess) === randomNumber) {
//     correctGuess = true; //flag
//   }
// } while (!correctGuess) 
if (correctGuess) {
  document.write("<h1>You guessed the number!</h1>");
  document.write("<p>It took you " + guessCount + " tries to guess the number </p>");
} else {
  document.write("<p>sorry! try again!</p>")
}


//for loops:

var html = "";

//<div>1</div>

for (var i; i <= 10; i++) {
  html += "<div>" + i + "</div>";
}
document.write(html);
console.log(html);




