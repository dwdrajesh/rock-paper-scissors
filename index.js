
console.log('hello world');


function getHumanChoice() {
    const userChoice = prompt('Do you choose rock, paper or scissors?');
    console.log('User choice: ' + userChoice);
    return userChoice;
}

function getComputerChoice () {
    const randval = Math.random();
    if (randval < 0.33) {
        return 'rock';
    } else if (randval < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(oHumanChoice, oComputerChoice) {
    const humanChoice = oHumanChoice.toLowerCase();
    const computerChoice = oComputerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You win!');
    } else {
        console.log('You lose!');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
