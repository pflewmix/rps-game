// gets and assigns computer choice to function
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 2) {
        return 'scissors';
    } else if (num == 1) {
        return 'paper';
    } else {
        return 'rock';
    }
}

// gets and assigns user choice to function
function getHumanChoice() {
    let input = prompt('Enter rock, paper, or scissors').toLowerCase();
    if (input === 'rock' || input === 'scissors' || input === 'paper') {
        return input;
    } else {
        return null;
    }
}

// declares variables and initial amounts for scores
let humanScore = 0;
let computerScore = 0;

// assigns function return value to variable
let humanChoice
// assigns function return value to variable
let computerChoice

// code for completing one round
function playRound(humanSelect, computerSelect) {
    console.log(`Me: ${humanSelect}`);
    console.log(`Computer: ${computerSelect}`);
    if (humanSelect == computerSelect) {
        console.log('Draw: No score!');
    } else if (humanSelect == 'scissors' && computerSelect == 'paper') {
        console.log(`You win! ${humanSelect} beats ${computerSelect}.`);
        humanScore++
    } else if (humanSelect == 'rock' && computerSelect == 'scissors') {
        console.log(`You win! ${humanSelect} beats ${computerSelect}.`);
        humanScore++
    } else if (humanSelect == 'paper' && computerSelect == 'rock') {
        console.log(`You win! ${humanSelect} beats ${computerSelect}.`);
        humanScore++
    } else {
        console.log(`You lose! ${computerSelect} beats ${humanSelect}.`);
        computerScore++
    }
    console.log(`You: ${humanScore} | CPU: ${computerScore}`);    
}

function playGame() {
    for (i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log('Invalid entry. Round not played.');
            i--;
        } else {
            computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
    }
    if (humanScore > computerScore) {
        console.log('You win!');
    } else if (humanScore == computerScore) {
        console.log('Draw! Play again!');
    } else {
        console.log('Computer wins!');
    }
}

playGame();