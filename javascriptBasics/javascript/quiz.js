/*
var answer = prompt("What progamming language is the name of a gem?");

//don't put semi-colons at the end of conditional statements.
if(answer.toUpperCase() === 'RUBY') {
  //code block
  document.write("<p>Yes!  You're correct!</p>")
} else {
  alert("Please Try again");
}
*/


/* 
Quiz Challenge
 - Ask at least five questions
 - Keep track of the number of questions the user answered correctly
 - Provide a final message after the quiz letting the user know the number of questions correct
 - Rank the player.  If the player answered all five correctly give the player the gold crown: 3-4 is a silver crown: 1-2 is a bronze and 0 correct is NO crown
*/
//amount of quiz questions 
var questions = 5; // don't really need this
//quiz begins, no answers correct
var questionsCorrect = 0;
var question1 = prompt("What's my name?");
if (question1.toUpperCase() === "JAMALEH") {
  document.write("<p>Yes! You got it right!</p>")
  questionsCorrect += 1
} else {
  alert("Sorry! Wrong answer!" )
  questionsCorrect += 1
}
var question2 = prompt("Where do I live?");
if (question2.toUpperCase() === "SYDNEY") {
  document.write("<p>Yes! You got it right! </p>");
  questionsCorrect += 1;
} else {
  alert("Sorry! Wrong answer!" );
  questions -= 1;
}
var question3 = prompt("Am I married?");
if (question3.toUpperCase() === "YES" || question3.toUpperCase() === "Y") {
  document.write("<p>Yes! You got it right!</p>" );
  questionsCorrect += 1;
} else {
  alert("Sorry! Wrong answer!" )
  questions -= 1
}
var question4 = prompt("Am I adopted?");
if (question4.toUpperCase() === "YES" || question4.toUpperCase() === "Y") {
  document.write("<p>Yes! You got it right!</p>");
  questionsCorrect += 1;
} else {
  alert("Sorry! Wrong answer!" );
  questions -= 1;
}
var question5 = prompt("What color eyes do I have?")
if (question5.toUpperCase() === "BROWN") {
  document.write("<p>Yes! You got it right!</p>");
  questionsCorrect += 1;
} else {
  alert("Sorry! Wrong answer!" );
  questions -= 1;
}
//output results
document.write("<p>You have completed the quiz!  You got " + questionsCorrect + " out of 5 answers correct!</p>")

//rank the player
if(questionsCorrect === 5){
  document.write("<p>You have earned a <strong>gold crown</strong>!</p>")
} else if (questionsCorrect >= 3) {
  document.write("<p>You have earned a <strong>silver crown</strong>!</p>")
} else if (questionsCorrect === 2) {
  document.write("<p>You have earned a <strong>bronze crown</strong>!</p>")
} else {
    document.write("<p>Better luck next time!</p>")

}
