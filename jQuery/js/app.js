/*
function myCode() {
  $(".warning").hide().show("slow");
}

$(document).ready(myCode);
//no parantheses because we want jQuery to run it when its ready.

//using anonymous function
var myCode = function() {
  $(".warning").hide().show("slow");
}
*/

//because its anonymous we can write it like: 
// $(document).ready(function() {
//   $(".warning").hide().show("slow");
// });


/*
//just a handler: 
$(function() {
  $(".warning").hide().show("slow");
});
*/

//(best practice) if we switch the script to the bottom then we don't have to wait for it to load because we know that it will have already loaded. 
//so we can just write: 
$(".warning").hide().show("slow");
