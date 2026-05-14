
console.log('hello world');


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

let totalPlays = 0;
let computerWins = 0;
let humanWins = 0;

function announceWinner() {
    const winner = humanWins > computerWins ? 'Player' : 'Computer';
    console.log('The winner is ' + winner + '!');
    resultsDiv.textContent = 'Results: ' + winner + ' won!';
    totalPlays = 0;
    computerWins = 0;
    humanWins = 0;

    // alert('Winner is ' + winner + '!');
}


function playRound(oHumanChoice) {
    if (totalPlays == 0) {
        console.log('New game!');
        resultsDiv.textContent = 'Results: ';
    }
    const humanChoice = oHumanChoice.toLowerCase();
    const computerChoice = getComputerChoice().toLowerCase();
    console.log('Human: ' + humanChoice + ' Computer: ' + computerChoice);
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You win!');
        humanWins++;
    } else {
        console.log('You lose!');
        computerWins++;
    }

    totalPlays++;

    if (totalPlays == 5) {
        announceWinner();
    }
}

const rockbtn = document.createElement('button');
const paperbtn = document.createElement('button');
const scissorsbtn = document.createElement('button');

rockbtn.textContent = 'Rock';
paperbtn.textContent = 'Paper';
scissorsbtn.textContent = 'Scissors';

rockbtn.addEventListener('click', () => playRound('rock'));
paperbtn.addEventListener('click', () => playRound('paper'));
scissorsbtn.addEventListener('click', () => playRound('scissors'));



const body = document.querySelector('body');
const buttonDiv = document.createElement('div');

buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'center';
buttonDiv.style.gap = '20px';

buttonDiv.appendChild(rockbtn);
buttonDiv.appendChild(paperbtn);
buttonDiv.appendChild(scissorsbtn);

document.body.appendChild(buttonDiv);


const resultsDiv = document.createElement('div');
resultsDiv.textContent = 'Results: ';
resultsDiv.style.textAlign = 'center';
// resultsDiv.style.backgroundColor = 'grey';
resultsDiv.classList.add('results-box');
document.body.appendChild(resultsDiv);
