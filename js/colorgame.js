var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //mode buttons event listeners
  setModeButtons();
  setSquareButtons();
  reset();
}

function setModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');

      //Discovered the Ternary Operator and will try to use it here
      this.textContent === 'Easy'? numSquares = 3: numSquares = 6;
      //  if (this.textContent === "Easy";) {
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
      //code how many square to show
      //pick new and random colors

      //pick a new pickedColor
      //update page to reflect changes
    });
  }
}

function setSquareButtons() {
  for (var i = 0; i < squares.length; i++) {
    //adds click listeners to each square?
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
}

function reset() {
  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //Change Color display to match picked colors
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = '';
  //change colors of quares
  for(var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = "#ad98df";
}

// easyBtn.addEventListener('click', function() {
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add('selected');
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }else{
//       squares[i].style.display = 'none';
//     }
//   }
// });
//
// hardBtn.addEventListener('click', function() {
// easyBtn.classList.remove("selected");
// hardBtn.classList.add("selected");
// numSquares = 6;
// colors = generateRandomColors(numSquares);
// pickedColor = pickColor();
// colorDisplay.textContent = pickedColor;
// for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = 'block';
//   }
// });

resetButton.addEventListener('click', function() {
  reset();
  // //generate new colors
  // colors = generateRandomColors(numSquares);
  // //pick a new random color from array
  // pickedColor = pickColor();
  // //Change Color display to match picked colors
  // colorDisplay.textContent = pickedColor;
  // this.textContent = "New Colors";
  // messageDisplay.textContent = '';
  // //change colors of quares
  // for(var i = 0; i < squares.length; i++) {
  //   squares[i].style.backgroundColor = colors[i];
  // }
  // h1.style.backgroundColor = "#ad98df";
});


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
