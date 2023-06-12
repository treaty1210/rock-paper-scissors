//Query selectors
const buttons = document.querySelectorAll("buttons");
const rock = document.querySelector(".rock-button");
const paper = document.querySelector(".paper-button");
const scissors = document.querySelector(".scissors-button");
const resultsDiv = document.querySelector(".results");
const tally = document.querySelector(".score");
const playerScoreSpan = document.querySelector(".player-score");
const compScoreSpan = document.querySelector(".comp-score");

//Determines randomly computer choice
function getComputerChoice() {
    if (Math.floor(Math.random() * 3) === 0) {
        return "rock";
    } else if (Math.floor(Math.random() * 3) === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

//Messages for round outcome
let playerScore = 0;
let compScore = 0;
let draw = "It's a draw.";
let win = "You win!";
let lose = "You lose!";

//Main function of RPS
function round(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        const p = document.createElement("p");
            p.innerText = draw;
        resultsDiv.appendChild(p);
    } else if (playerSelection === "rock"  && computerSelection === "scissors" ) {
        const p = document.createElement("p");
            p.innerText = win;
        resultsDiv.appendChild(p);
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        const p = document.createElement("p");
            p.innerText = win;
        resultsDiv.appendChild(p); 
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        const p = document.createElement("p");
            p.innerText = win; 
        resultsDiv.appendChild(p);
        playerScore++;
    } else {
        const p = document.createElement("p");
            p.innerText = lose;
        resultsDiv.appendChild(p);
        compScore++;
    }
}

function stopWin(playerScore, compScore) {
    console.log("1", playerScore, "2", compScore)
    if (playerScore === 5) {
        const p = document.createElement("p");
        p.style.backgroundColor = "green";
        p.style.fontWeight = "bold";
        p.style.color = "white";
        p.style.fontSize = "32px";
        p.innerText = `Player wins: ${playerScore} to ${compScore}`;
        tally.appendChild(p);
    } else if (compScore === 5) {
        const p = document.createElement("p");
        p.style.backgroundColor = "red";
        p.style.fontWeight = "bold";
        p.style.color = "white";
        p.style.fontSize = "32px";
        p.innerText = `Computer wins: ${compScore} to ${playerScore}`;
        tally.appendChild(p);
    }
}

//Event listeners for buttons

rock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    round(playerSelection, computerSelection);
    playerScoreSpan.innerText = `Player: ${playerScore}`;
    compScoreSpan.innerText = `Computer: ${compScore}`;
    stopWin(playerScore, compScore);
});
 
paper.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    round(playerSelection, computerSelection);
    playerScoreSpan.innerText = `Player: ${playerScore}`;
    compScoreSpan.innerText = `Computer: ${compScore}`;
    stopWin(playerScore, compScore)
});

scissors.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    round(playerSelection, computerSelection);
    playerScoreSpan.innerText = `Player: ${playerScore}`;
    compScoreSpan.innerText = `Computer: ${compScore}`;
    stopWin(playerScore, compScore)
});
