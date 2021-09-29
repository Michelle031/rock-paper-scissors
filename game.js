const score = document.querySelector(".no");
var userScore = 0;
const options = ["r", "p", "s"];
const message = document.querySelector(".h2");
const paper = document.querySelector(".p");
const rock = document.querySelector(".r");
const scissors = document.querySelector(".s");
const opening_u = document.querySelector(".user");
const opening_c = document.querySelector(".comp");
const b1 = document.querySelector(".board");
const b2 = document.querySelector(".picks");
const center_ = document.querySelector(".message");
const h2_ = Array.from(document.querySelectorAll(".pick"));
document.querySelector(".play").addEventListener("click", playAgain);


function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  return options[randomNumber];
}
function appear2() {
    center_.style.display = "flex";
    h2_.forEach(element => element.style.display = " none");
}
function disappear2() {
    center_.style.display = "none";
    h2_.forEach(element => element.style.display = " block");
}
function pickCircle(z) {
  var new_ = change(z);
  var circle =
    `<div class="circle ` +
    z +
    ` " id="` +
    new_ +
    `" ::before>
       <img src="./images/icon-` +
    new_ +
    `.svg">
       </div>`;
  opening_u.innerHTML = circle;
}
function pickCircle_c(y) {
  var new_c = change(y);
  console.log(y);
  var circle =
    `<div class="circle ` +
    y +
    ` " id="` +
    new_c +
    `" ::before>
       <img src="./images/icon-` +
    new_c +
    `.svg">
       </div>`;
  opening_c.innerHTML = circle;
}
function change(c) {
  if (c == "r") return "rock";
  if (c == "p") return "paper";
  if (c == "s") return "scissors";
}
function appear() {
  b1.style.display = "none";
  b2.style.display = "flex";
}
function disappear() {
  b2.style.display = "none";
  b1.style.display = "flex";
}

function win(a, b) {
  userScore++;
  score.innerHTML = userScore;
  var uChoice = document.getElementById(change(a));
  uChoice.classList.add("special");
  message.innerHTML = "YOU WIN";
}
function lose(a, b) {

  if ( userScore == 0) {
    return userScore;
  } else {
    userScore--;
  }
  score.innerHTML = userScore;
  var compChoice = document.getElementById(change(b));
  compChoice.classList.add("special");
  message.innerHTML = "YOU LOSE";

}
function tie(a, b) {
  console.log("tie");
  message.innerHTML = "IT'S A TIE";
}
function playAgain() {
    disappear();
}

function game(userChoice) {
  pickCircle(userChoice);
  const computerChoice = getComputerChoice();
  pickCircle_c(computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "ps":
    case "rp":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
  }
}
function main() {
  rock.addEventListener("click", function () {
    appear();
    game("r"); 
    disappear2();
    setTimeout(appear2, 1000);
});

  paper.addEventListener("click", function () {
    appear();
    game("p");
    disappear2();
    setTimeout(appear2, 1000);
  });

  scissors.addEventListener("click", function () {
    appear();
    game("s");
    disappear2();
    setTimeout(appear2, 1000);
  });
}
main();

