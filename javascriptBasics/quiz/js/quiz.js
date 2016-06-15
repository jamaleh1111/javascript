

var questions = [
  {
    question: "What is the best Netflix show?", 
    answer: "Mad Men"
  },
  {
    question: "What is the cleanest place in the world?", 
    answer: "Singapore"
  },
  {
    question: "What is the name of the president of the US?",
    answer: "Obama"
  }
];

var correctAnswers = 0;
var wrongAnswers = 0;
var answers;
var response;
var html;
var correct = [];
var wrong = [];


function print(message) { 
  //DOM
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i+=1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i+=1) {
  // question = questions[i][0];
  question = questions[i].question;
  // answer = questions[i][1].toLowerCase();
  answer = questions[i].answer.toLowerCase();
  response = prompt(question);
  if(response === answer) {
    correctAnswers += 1;
    correct.push(question)

  } else {
    wrongAnswers += 1;
    wrong.push(question);
  }
}

  html = "<h1>You got " + correctAnswers + " question(s) right.</h1>"
  html += '<h2> You got these questions correct: </h2>'  
  html += buildList(correct);
  html += '<h2> You got these questions wrong: </h2>'
  html += buildList(wrong);
 

  print(html);

