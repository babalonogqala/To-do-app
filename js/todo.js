const backgroundImage = document.querySelector(".heading");
const changeColor = document.querySelector("svg");
const inputElement = document.querySelector(".gray1");
const background = document.body;
let isWhite = true;
let newImage = true;
function changeTheme() {
  if (isWhite) {
    background.style.backgroundColor = "white";
    inputElement.style.backgroundColor = "gray";
  } else {
    background.style.backgroundColor = "rgb(22, 23, 34)";
    inputElement.style.backgroundColor = "hsl(235, 24%, 19%)";
  }

  isWhite = !isWhite;

  if (newImage) {
    backgroundImage.style.backgroundImage =
      "url(../images/bg-desktop-light.jpg)";
  } else {
    backgroundImage.style.backgroundImage =
      "url(../images/bg-desktop-dark.jpg)";
  }

  newImage = !newImage;
}
function addTodo() {}
