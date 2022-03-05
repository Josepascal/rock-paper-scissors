// Return radomly rock, paper, or scissors
const computerPlay = () => {
  const selection = ["rock", "paper", "scissors"];
  let randomIndex = Math.round(Math.random() * 2);
  return selection[randomIndex];
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

const playerSelection = 'paper';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));