//read and print out student data.
var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML += message;
}

function getStudentReport(student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>track: ' + student.track + '</p>';
    report += '<p>achievements: ' + student.achievements + '</p>';
    report += '<p>points: ' + student.points + '</p>';
    return report;
}
while (true) {  // prompt user for a name
search = prompt("Please enter a name. Write 'quit' to exit.");
  if (search.toLowerCase() === 'quit' || search === null) {
    break;
  } 
  for (var i = 0; i <students.length; i+=1) {
    student = students[i];
    if (student.name === search) {
      message = getStudentReport(student);
      print(message);
    } 
  } 
  if (student.name !== search){
      message = "<p> There is no student with the name " + search  + "</p>";
      print(message);
    }
}

// if name matches a name in the array

  //return that object
  //else if 'quit', then break
  //else that student object does not exist




// for (var i = 0; i <students.length; i+=1) {
//   student = students[i];
//   message += '<h2>Student: ' + student.name + '</h2>';
//   message += '<p>track: ' + student.track + '</p>';
//   message += '<p>achievements: ' + student.achievements + '</p>';
//   message += '<p>points: ' + student.points + '</p>';
// }

// print(message);