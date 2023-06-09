function getComputerChoice() {
    if (Math.floor(Math.random() * 3) === 0) {
        return "rock";
    } else if (Math.floor(Math.random() * 3) === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice());

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw";
    } else if (playerSelection === "rock"  && computerSelection === "scissors" ) {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper"
    } else {
        return `You lose! ${getComputerChoice()} beats ${playerSelection()}`
    }

}

const playerSelection = prompt("Type in rock, paper, or scissors").toLowerCase;
const computerSelection = getComputerChoice();