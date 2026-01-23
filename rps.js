// score variables
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// DOM elements
const buttons = document.querySelectorAll('button');
const roundResult = document.getElementById('roundResult');
const scoreDisplay = document.getElementById('score');
const gameResult = document.getElementById('gameResult');

// computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

// play one round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundResult.textContent = 'Draw: No score!';
  } 
  else if (
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } 
  else {
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  roundsPlayed++;
  scoreDisplay.textContent = `You: ${humanScore} | CPU: ${computerScore}`;

  if (roundsPlayed === 5) {
    endGame();
  }
}

// end game after 5 rounds
function endGame() {
  if (humanScore > computerScore) {
    gameResult.textContent = 'You win the game!';
  } else if (humanScore === computerScore) {
    gameResult.textContent = 'It’s a draw! Play again!';
  } else {
    gameResult.textContent = 'Computer wins the game!';
  }

  buttons.forEach(button => button.disabled = true);
}

// event listeners for buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});