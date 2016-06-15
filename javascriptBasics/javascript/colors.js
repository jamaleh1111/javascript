var html = '';
var rgbColor;

var colorVariation = function() {
  return Math.floor(Math.random() * 256 );
}

var randomColor = function() {
  var color = 'rgb(';
    color += colorVariation() + ",";
    color += colorVariation() + ",";
    color += colorVariation() + ")";
  return color;
}

var print = function(message) {
  document.write(message);
}

for (var i = 0; i < 10; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);