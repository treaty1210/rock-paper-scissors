//Query selectors
const buttons = document.querySelectorAll("buttons"); //update these to be click on the images instead of buttons
const rock = document.querySelector(".rock-button"); //also add spock and lizard
const paper = document.querySelector(".paper-button");
const scissors = document.querySelector(".scissors-button");
const resultsDiv = document.querySelector(".results");
const tally = document.querySelector(".score");
const playerScoreSpan = document.querySelector(".player-score");
const compScoreSpan = document.querySelector(".comp-score");

//Determines randomly computer choice
function getComputerChoice() {   
    if (Math.floor(Math.random() * 5) === 0) { //rock beats scissors and lizard
        return "rock";
    } else if (Math.floor(Math.random() * 5) === 1) { //paper beats rock and spock
        return "paper"
    } else if (Math.floor(Math.random() * 5) === 2) { //scissors beats paper and lizard
        return "scissors"
    } else if (Math.floor(Math.random() * 5) === 3) { //lizard beats paper and spock
        return "lizard"
    } else { //spock beats scissors and rock
        return "spock"
    }
}

//Messages for round outcome
let playerScore = 0; //change this to only player score and have it update in html like before (can also try to make it remain after refresh of page)
let compScore = 0; //remove this
let draw = "It's a draw."; //move this to html display none 
let win = "You win!"; //move this to html display none 
let lose = "You lose!"; //move this to html display none 

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

//NO LONGER NEED A STOP WIN FUNCTION

// function stopWin(playerScore, compScore) { 
//     console.log("1", playerScore, "2", compScore)
//     if (playerScore === 5) {
//         const p = document.createElement("p");
//         p.style.backgroundColor = "green";
//         p.style.fontWeight = "bold";
//         p.style.color = "white";
//         p.style.fontSize = "32px";
//         p.innerText = `Player wins: ${playerScore} to ${compScore}`;
//         tally.appendChild(p);
//     } else if (compScore === 5) {
//         const p = document.createElement("p");
//         p.style.backgroundColor = "red";
//         p.style.fontWeight = "bold";
//         p.style.color = "white";
//         p.style.fontSize = "32px";
//         p.innerText = `Computer wins: ${compScore} to ${playerScore}`;
//         tally.appendChild(p);
//     }
// }

//Event listeners for buttons (need to change to image instead of button, logic should still remain the same)
//probably just remove the compscore
//make your pick first and then computer should make a pick
//so user select image and then the computer's choice should appear afterwards
//after selection, selection pentagon should disappear
//add a play again button which should reset everything and make the pentagon reappear and selection should be hidden again

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
