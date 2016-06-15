// alert("hello");
// document.write("<h1>JavaScript Basics</h1>");
// alert("Thanks for coming!");

// var visitorName = prompt("What is your name?");
// console.log(visitorName);

// var visitor = prompt("What is your name?");
// var message = "Hello " + visitor + "!";
// message += " We are so happy you have joined us at TreeHouse!"
// message += " Please come again anytime!  Long Live Coding!!!"
// document.write(message);

// var passPhrase = "Hello,my name is.";
// console.log(passPhrase.length);
// console.log(passPhrase.toUpperCase());

// var stringToShout = prompt("What should I shout?");
// var shout = stringToShout.toUpperCase();
// shout += "!!!"
// alert(shout);

//this is NOT DRY!!!

var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt("Please enter a noun. " + questionsLeft);
questions -= 1
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt("Please enter a verb. " + questionsLeft);
questions -= 1
questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt("Please enter an adjective. " + questionsLeft);
questions -= 1
var warning = prompt("Are you ready to see the story?")
var story = document.write("<h2>The " + noun + " was super " + verb + " the " + adjective + " frog at the mushroom.</h2>");
