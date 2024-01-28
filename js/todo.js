const backgroundImage = document.querySelector(".heading");
const inputElement = document.querySelector(".gray1");
const changeColor = document.querySelector("svg");
const btn = document.querySelector(".gray2").addEventListener("click", addTodo);
const background = document.body;
let isWhite = true;
let newImage = true;

// logic for changing the color
function changeTheme() {
  // if the svg is clicked it will change the background color to white and the input bar or else when clicked again and the boolean is false if will go back to dark mode
  if (isWhite) {
    background.style.backgroundColor = "white";
    inputElement.style.backgroundColor = "rgb(236, 236, 236)";
  } else {
    background.style.backgroundColor = "rgb(22, 23, 34)";
    inputElement.style.backgroundColor = "hsl(235, 24%, 19%)";
  }

  isWhite = !isWhite;

  //   this will change the background image for the todo when in light mode and dark mode
  if (newImage) {
    backgroundImage.style.backgroundImage =
      "url(../images/bg-desktop-light.jpg)";
  } else {
    backgroundImage.style.backgroundImage =
      "url(../images/bg-desktop-dark.jpg)";
  }

  newImage = !newImage;
}

// logic for the input of the todo
const todoList = [];

// // logic for displaying the todo
displayingTodo();
function displayingTodo() {
  let innerHTMLText = "";
  todoList.forEach((todo, index) => {
    const html = `<div class = "flex"><p class= "list-p"><span class = "span">${todo}</span>
        </p> <button onclick = "
        todoList.splice(${index}, 1);
         displayingTodo();
          ">Delete</button></div>
          `;
    innerHTMLText += html;
  });
  document.querySelector(".list").innerHTML = innerHTMLText;
}

// grabbing user input
function addTodo() {
  const name = inputElement.value; // taking what is entered in the input
  inputElement.value = ""; //removing the value in input (clear)
  todoList.push(name);
  displayingTodo();
  console.log(todoList);
}
