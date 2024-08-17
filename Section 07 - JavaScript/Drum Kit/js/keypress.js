let buttons = document.querySelectorAll(".drum"); // target the button with .drum class

//Detecting button pressed
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // selecting the buttons that got clicked
    let buttonInnerHTML = this.innerHTML; //check the innerHTML that has been pressed.
    makeSound(buttonInnerHTML); //send that to make sound in order to make a relevant sound.
  });
}

// Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  //use switch to match the keyboard key that is pressed with the sounds
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}


