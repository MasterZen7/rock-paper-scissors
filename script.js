let playerScore = 0;
let computerScore = 0;

const computerChoice = () => {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice [randomChoice]
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `Its a tie! You both picked ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore ++
        return `You lose! Paper covers rock`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore ++
        return `You win! Rock crushes scissors`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore ++
        return `You lose! Scissors cut paper`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++
        return `You win! Paper covers rock`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore ++
        return `You lose! Rock crushes scissors`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore ++
        return `You win! Scissors cut paper`
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose rock, paper or scissors').toLowerCase();
        const computerSelection = computerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
    return `You won! You beat the computer`
    } else if (playerScore < computerScore) {
        return `You lose! Computer beat you`
    } else {
        return `Its a tie!`
    }
}

console.log(game())
