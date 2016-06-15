var playList = [
  ["I did it my way", "Frank Sinatra"],
  ["Respect", "Aretha Franklin"],
  ["Imagine", "John Lennon"]
];

//printList(playList);

// var playList = [
//   "I did it my way",
//   "Respect", 
//   "Imagine",
//   "Bord to run",
//   "Louie Louie", 
//   "Michelle"
// ];

function print(message) {
  document.write(message);
}

function printSongs(songs) {
  var listHTML = '<ol>';
  for (var i = 0; i < songs.length; i+=1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>'
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);