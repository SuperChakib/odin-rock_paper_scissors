const computerPlay = () => {
  let cards = ["Rock", "Paper", "Scissors"];

  return cards[Math.floor(Math.random() * 3)];
};

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `Two ${capitalizeFirst(playerSelection)}! It's a tie!`;
  }
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You lose! ${capitalizeFirst(
      computerSelection
    )} beats ${capitalizeFirst(playerSelection)}.`;
  }
  if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    return `You win! ${capitalizeFirst(
      playerSelection
    )} beats ${capitalizeFirst(computerSelection)}.`;
  }
  return "Invalid name. Write 'Paper', 'Rock' or 'Scissors'.";
};

let playerSelection = "rock";
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

let game = () => {
  for (let i = 5; i > 0; i++) {
    playerSelection = prompt("What do you choose?", "");
    if (!playerSelection) return;
    console.log(playRound(playerSelection, computerPlay()));
  }
};

game();
