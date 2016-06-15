// var number1 = prompt("please enter a starting number");

// var bottomNumber = parseInt(number1);

// var number2 = prompt("please enter an ending number");

// var topNumber = parseInt(number2)

// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) * bottomNumber ;

// var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";

// document.write(message);

/*
The Random Number Guessing Game generates
a number between 1 and 6
and gives a player two attemts to guess the number 
*/
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I am thinking of a number between 1 and 6.  What is it?");

if(parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt("Try again. The number I am thinking of is more than " + guess);
  if(parseInt(guessMore) === randomNumber) {
  correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt("Try again. The number I am thinking of is less than " + guess);
  if(parseInt(guessLess) === randomNumber) {
  correctGuess = true;
  }
}
if (correctGuess){
  document.write("<p> You guessed the number!</p>");
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}














