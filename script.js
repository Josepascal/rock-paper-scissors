const computerPlay = () => {
  console.log("rock");
}

const playRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();

  if (player === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper beats Rock';
  } else if (player === 'scissors' && computerSelection === 'rock') {
    return 'You lose! Rock beats Scissors';
  } else if (player === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors beats Paper';
  } else {
    return 'You Win!!';
  }
}

// const playerSelection = "scissors";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));