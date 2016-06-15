var person = {
  name: "Sarah",
  country: "US",
  age: 35,
  treeHouseStudent: true,
  skills: ["javascript", "ruby", "DOM"]
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

for (key in person) {
  console.log(key + ": " + person[key])
}

// var message = "<p>Hello. My name is " + person.name + "</p>";
// message += "<p>I live in the " + person.country + "</p>";
// message += "<p>I am " + person.age + " years old</p>";
// person.country = "Singapore";
// message += "<p> I wish that I lived in " + person.country + ".  I've heard it's very clean.</p>"
// message += "<p>I have " + person.skills.length + " skills.  They are " + person.skills.join(", ") + ".</p>"
// print(message);