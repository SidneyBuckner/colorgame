var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', function() {
  //generate new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //Change Color display to match picked colors
  colorDisplay.textContent = pickedColor;
  //change colors of quares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function() {
    var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
          messageDisplay.textContent = 'Correct!';
          resetButton.textContent = 'Play Again?';
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
      } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent ="Try Again";
      }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make and array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //return array at the end
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";

}
