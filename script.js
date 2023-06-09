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

//Main function of RPS
function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return draw;
    } else if (playerSelection === "rock"  && computerSelection === "scissors" ) {
        return win;  
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return win;  
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return win;  
    } else {
        return lose;
    }
}

//Messages for round outcome
let playerScore = 0;
let compScore = 0;
let drawScore = 0;
let draw = "It's a draw.";
let win = "You win!";
let lose = "You lose!";



//Game loop
function game() {
        for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("Type in rock, paper, or scissors").toLowerCase();
            const computerSelection = getComputerChoice(); 
            let result = round(playerSelection, computerSelection);
            console.log(result);
            score(result);
            console.log("Total Score (Player): " + playerScore);
            console.log("Total Score (Computer): " + compScore);
            console.log("Total Draws: " + drawScore);
        } 
}


//Scoring function
function score(result) {
    if (result === win) {
        playerScore++;
    } else if (result === lose) {
        compScore++;
    } else  {
        drawScore++;
    }
}



