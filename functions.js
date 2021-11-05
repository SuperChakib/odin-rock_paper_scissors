let buttons = document.querySelectorAll(".cards button");
buttons.forEach((button) => button.addEventListener("click", playRound));

let result = document.querySelector("#message");

function computerPlay() {
  let cards = ["Rock", "Paper", "Scissors"];
  return cards[Math.floor(Math.random() * 3)];
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  /* if (!playerScore && !computerScore)
    document.getElementById("message").textContent = ""; */

  playerSelection = this.textContent.toLowerCase();
  computerSelection = computerPlay().toLowerCase();

  if (playerSelection === computerSelection) {
    result.textContent = `Two ${capitalizeFirst(playerSelection)}! It's a tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result.textContent = `You lose! ${capitalizeFirst(
      computerSelection
    )} beats ${capitalizeFirst(playerSelection)}.`;
    computerScore++;
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    result.textContent = `You win! ${capitalizeFirst(
      playerSelection
    )} beats ${capitalizeFirst(computerSelection)}.`;
    playerScore++;
  }

  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("player-score").textContent = playerScore;

  if (computerScore === 5) {
    result.innerHTML = "<h3>PC won the game</h3>";
    [playerScore, computerScore] = [0, 0];
  }
  if (playerScore === 5) {
    result.innerHTML = "<h3>You won the game</h3>";
    [playerScore, computerScore] = [0, 0];
  }
}
