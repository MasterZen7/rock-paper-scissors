const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#computerPoints');
const result = document.querySelector('#resultsContainer');
const button =document.querySelector('button');
let playerScore = 0;
let computerScore = 0;


const computerChoice = () => {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice [randomChoice]
}


const playRound = (playerSelection, computerSelection) => {
    if (playerScore < 5 && computerScore < 5)
    if (playerSelection === computerSelection) {
        result.textContent = `Tie! You both picked ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result.textContent = `You lose! Computers paper covers your rock`
        computerPoints.textContent = (computerScore += 1)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.textContent = `You win! Your rock crushes computers scissors`
        playerPoints.textContent = (playerScore += 1)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result.textContent = `You lose! Computers scissors cut your paper`
        computerPoints.textContent = (computerScore += 1)
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.textContent = `You win! Your paper covers computers rock`
        playerPoints.textContent = (playerScore += 1)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result.textContent = `You lose! Computers rock crushes your scissors`
        computerPoints.textContent = (computerScore += 1)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.textContent = `You win! Your scissors cut computers paper`
        playerPoints.textContent = (playerScore += 1)
    }
}


const checkWinner = (playerScore, computerScore) => {
    if (playerScore == 5) {
        result.textContent = `You win! You beat the computer ${playerScore} - ${computerScore}`
        result.style.color = 'lightGreen'
        button.style.visibility = 'visible'
    } else if (computerScore == 5) {
        result.textContent = `You lose! Computer beat you ${computerScore} - ${playerScore}`
        result.style.color = 'red'
        button.style.visibility = 'visible'
    }
}


rock.addEventListener('click', () => {
    playerSelection = 'rock'
    computerSelection = computerChoice();
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
})


paper.addEventListener('click', () => {
    playerSelection = 'paper'
    computerSelection = computerChoice();
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
})


scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    computerSelection = computerChoice();
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, computerScore)
})

button.addEventListener('click', () => {
    playerScore = 0
    playerPoints.textContent = playerScore
    computerScore = 0
    computerPoints.textContent = computerScore
    result.textContent = ''
    button.style.visibility = 'hidden'
    result.style.color = ''
})


/* const game = () => {
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
 */