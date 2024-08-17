// let buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", handleClick);
// }

// function handleClick() {
//   alert(" I got Clicked!");
// }

// using anonymous function
// let buttons = document.querySelectorAll(".drum"); // target the button with .drum class

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     alert(" I got Clicked!");
//   });
// }

//Method 3

// let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (let i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// }

// function handleClick() {
//   alert("I Got Clicked!");
// }

// same Method 3 different
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I Got Clicked!");
  });
}
