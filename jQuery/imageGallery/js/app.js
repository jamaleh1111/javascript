//problem : image opens to a new tab and dead end
//solution: create lighbox!

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//an image to overlay
$overlay.append($image);

//a caption to overlay
$overlay.append($caption);
//add overlay
$("body").append($overlay);

//1. captuer click even on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //update overlay wiht the image linked in the link
  $image.attr("src", imageLocation)
  $overlay.show();
  //c. get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText)
});
  //a. show the overlay
  
//2. Add overlay
  //a. an image 
  //b. a caption
//3. when over lay is clicked
$overlay.click(function() {
    //a. hide overlay
  $overlay.hide();
});

  

  