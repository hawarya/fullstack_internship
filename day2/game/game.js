// 1. Get all required DOM elements
const againbutton = document.querySelector(".again");
const num = document.querySelector(".number h1"); 
const guess = document.querySelector("#guess-input"); 
const checkbtn = document.querySelector(".btn-check");
const message = document.querySelector(".message");
const score = document.querySelector(".score1");
const highscore = document.querySelector(".highscore1");

// 2. Initialize game variables
let random = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let maxScore = 0;
console.log("Random number:", random);

// 3. Check button logic
const checkFunc = () => {
  const userGuess = Number(guess.value);

  if (!userGuess) {
    message.textContent = "Please enter a number!";
  } else if (userGuess === random) {
    message.textContent = "Correct Number!";
    document.body.style.backgroundColor = "green";
    num.textContent = random;

    if (currentScore > maxScore) {
      maxScore = currentScore;
      highscore.textContent = maxScore;
    }
  } else {
    if (currentScore > 1) {
      currentScore--;
      score.textContent = currentScore;
      message.textContent = userGuess < random ? "Too low!" : "Too high!";
    } else {
      message.textContent = "Game Over!";
      score.textContent = 0;
      document.body.style.backgroundColor = "red";
    }
  }
};

// 4. Again button logic
const againFunc = () => {
  random = Math.trunc(Math.random() * 20) + 1;
  console.log("New number:", random);
  currentScore = 20;
  score.textContent = currentScore;
  num.textContent = "?";
  guess.value = "";
  message.textContent = "Start guessing...";
  document.body.style.backgroundColor = "black";
};

// 5. Attach event listeners
checkbtn.addEventListener("click", checkFunc);
againbutton.addEventListener("click", againFunc);
