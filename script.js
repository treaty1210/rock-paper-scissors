//Query selectors
//update these to be click on the images instead of buttons
//also add spock and lizard
const btns = document.querySelectorAll(".btn")
btns.forEach(button => button.addEventListener("click", (e) => {
    let playerSelection = String(e.target.className)
    let computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
    round(playerSelection, computerSelection)
}))

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
// let draw = "It's a draw."; //move this to html display none 
// let win = "You win!"; //move this to html display none 
// let lose = "You lose!"; //move this to html display none 

//Main function of RPS
function round(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("tie")
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "rock" && computerSelection == "lizard") {
        console.log("win")
        // playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock" || 
        playerSelection == "paper" && computerSelection == "spock") {
        console.log("win")
        // playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "lizard") {
        console.log("win")
        // playerScore++;
    } else if (playerSelection == "lizard" && computerSelection == "paper" ||
        playerSelection == "lizard" && computerSelection == "spock") {
            console.log("win")
    } else if (playerSelection == "spock" && computerSelection == "scissors" || 
        playerSelection == "spock" && computerSelection == "rock") {
            console.log("win")
    } else {
        console.log("lose")
    }
}

//NO LONGER NEED A STOP WIN FUNCTION (OUTDATED DOES NOT WORK WITH ROCK PAPER SCISSORS LIZARD SPOCK)

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
//probably just remove the comp score
//make your pick first and then computer should make a pick
//so user select image and then the computer's choice should appear afterwards
//after selection, selection pentagon should disappear
//add a play again button which should reset everything and make the pentagon reappear and selection should be hidden again


//OUTDATED EVENT LISTENERS
// rock.addEventListener("click", () => { 
//     const computerSelection = getComputerChoice();
//     const playerSelection = "rock";
//     round(playerSelection, computerSelection);
//     playerScoreSpan.innerText = `Player: ${playerScore}`;
//     compScoreSpan.innerText = `Computer: ${compScore}`;
//     stopWin(playerScore, compScore);
// });
 
// paper.addEventListener("click", () => {
//     const computerSelection = getComputerChoice();
//     const playerSelection = "paper";
//     round(playerSelection, computerSelection);
//     playerScoreSpan.innerText = `Player: ${playerScore}`;
//     compScoreSpan.innerText = `Computer: ${compScore}`;
//     stopWin(playerScore, compScore)
// });

// scissors.addEventListener("click", () => {
//     const computerSelection = getComputerChoice();
//     const playerSelection = "scissors";
//     round(playerSelection, computerSelection);
//     playerScoreSpan.innerText = `Player: ${playerScore}`;
//     compScoreSpan.innerText = `Computer: ${compScore}`;
//     stopWin(playerScore, compScore)
// });


