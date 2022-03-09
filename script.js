let playerSelection;
let computerSelection;
const choices = ["rock", "paper", "scissors"];

// Return radomly rock, paper, or scissors
const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Function that plays one round of game
const playRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();

  if (computerSelection === 'paper' && player === 'rock') return 'You lose! Paper beats Rock';
  if (computerSelection === 'scissors' && player === 'paper') return 'You lose! Scissors beats Paper';
  if (computerSelection === 'rock' && player === 'scissors') return 'You lose! Rock beats Scissors';
  if (computerSelection === player) return 'It is a tie!';

  return 'You Win!!';
}

// Game function
const game = () => {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose rock, paper, or scissors");
    computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
  }
}

alert(game(playerSelection, computerSelection));