//dice 1

var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

let imageDice = `images/dice${randomNumber1}.png`;

let img1 = document.querySelector(".img1");
img1.setAttribute("src", imageDice);


//second dice
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

let imageDice2 = `images/dice${randomNumber2}.png`;

let img2 = document.querySelector(".img2");
img2.setAttribute("src", imageDice2);


//choose the winner
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}






