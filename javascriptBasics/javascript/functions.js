//name the function
function getRandomNumber(lower, upper) {
  var randomNumber = Math.floor(Math.random() * (upper - lower + 1) + lower);
  //return Math.floor(Math.random() * (upper - lower +1) + lower);
  if (isNaN(lower) || isNaN(upper)) {
    alert("Please write numbers, not words");
    throw new Error("you must use integers");
  }
  return randomNumber;
} //NO semi-colon

//document.write(getRandomNumber(4, 8));
console.log(getRandomNumber("ten", 30));
//call the function
//alert(getRandomNumber());
//console.log(getRandomNumber(6));
//console.log(getRandomNumber(200));
//console.log(getRandomNumber(500));
//document.write(getRandomNumber());

function getArea (width, length, unit){
  var area = width*length;
  return area + " " + unit;
}

console.log(getArea(33,22,'sq ft'));
console.log(getArea(3,2,'sq ft'));

/* 

//function expression.
//the function is "anonymous"
var alertRandom = function() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
}; //semi-colon!

alertRandom();

*/





