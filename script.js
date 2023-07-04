//Query selectors
const btns = document.querySelectorAll(".btn")
const score = document.querySelector('.scoreVal')
const pickArea = document.querySelector(".pickArea")
const picks = document.querySelector(".picks")
const result = document.querySelector(".result")
const playAgain = document.querySelector(".playAgain")
const rules = document.querySelector(".rules")
const playerIcon = document.querySelector(".playerSelection")
const houseIcon = document.querySelector(".houseSelection")

//Messages for round outcome
let playerScore = 0;

//Event listener for the buttons
btns.forEach(button => button.addEventListener("click", (e) => {
    let playerSelection = String(e.target.className)
    showPlayerSelect(e);
    let computerSelection = getComputerChoice();
    setTimeout(() => {
        showComputerSelection(computerSelection) //small delay for house pick
    }, 1000);
    console.log(playerSelection, computerSelection);
    round(playerSelection, computerSelection)
    score.textContent = `${playerScore}`
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


//Main function of RPS
function round(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("tie")
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "rock" && computerSelection == "lizard") {
        console.log("win")
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock" || 
        playerSelection == "paper" && computerSelection == "spock") {
        console.log("win")
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "lizard") {
        console.log("win")
        playerScore++;
    } else if (playerSelection == "lizard" && computerSelection == "paper" ||
        playerSelection == "lizard" && computerSelection == "spock") {
            console.log("win")
            playerScore++;
    } else if (playerSelection == "spock" && computerSelection == "scissors" || 
        playerSelection == "spock" && computerSelection == "rock") {
            console.log("win")
            playerScore++;
    } else {
        console.log("lose")
    }
}

//array to select class
const itemBtn = ["rockBtn", "paperBtn", "scissorsBtn", "lizardBtn", "spockBtn"]

//Function to show selection page
function showPlayerSelect(e) {
    pickArea.style.display = "none";
    picks.style.display = "grid";

    if (e.target.className == "rock") {
        let pIcon = itemBtn[0]
        playerIcon.innerHTML = `<div class="${pIcon}">
            <img src="${e.target.src}" alt="${e.target.alt}" class="${e.target.className}">
            </div>`
    } else if (e.target.className == "paper") {
        let pIcon = itemBtn[1]
        playerIcon.innerHTML = `<div class="${pIcon}">
            <img src="${e.target.src}" alt="${e.target.alt}" class="${e.target.className}">
            </div>`
    } else if (e.target.className == "scissors") {
        let pIcon = itemBtn[2]
        playerIcon.innerHTML = `<div class="${pIcon}">
            <img src="${e.target.src}" alt="${e.target.alt}" class="${e.target.className}">
            </div>`
    } else if (e.target.className == "lizard") {
        let pIcon = itemBtn[3]
        playerIcon.innerHTML = `<div class="${pIcon}">
            <img src="${e.target.src}" alt="${e.target.alt}" class="${e.target.className}">
            </div>`
    } else {
        let pIcon = itemBtn[4]
        playerIcon.innerHTML = `<div class="${pIcon}">
            <img src="${e.target.src}" alt="${e.target.alt}" class="${e.target.className}">
            </div>`
    }
}

//function to show computer selection
function showComputerSelection(computerSelection) {
    if (computerSelection == "rock") {
        let cIcon = itemBtn[0]
        houseIcon.innerHTML = `<div class="${cIcon}">
            <img src="images/icon-rock.svg" alt="rock" class="rock">
            </div>`;
        houseIcon.style.display = "flex"
    } else if (computerSelection == "paper") {
        let cIcon = itemBtn[1]
        houseIcon.innerHTML = `<div class="${cIcon}">
            <img src="images/icon-paper.svg" alt="paper" class="paper">
            </div>`;
        houseIcon.style.display = "flex"
    } else if (computerSelection == "scissors") {
        let cIcon = itemBtn[2]
        houseIcon.innerHTML = `<div class="${cIcon}">
            <img src="images/icon-scissors.svg" alt="scissors" class="scissors">
            </div>`;
        houseIcon.style.display = "flex"
    } else if (computerSelection == "lizard") {
        let cIcon = itemBtn[3]
        houseIcon.innerHTML = `<div class="${cIcon}">
            <img src="images/icon-lizard.svg" alt="lizard" class="lizard">
            </div>`;
        houseIcon.style.display = "flex"
    } else if (computerSelection == "spock") {
        let cIcon = itemBtn[4]
        houseIcon.innerHTML = `<div class="${cIcon}">
            <img src="images/icon-spock.svg" alt="spock" class="spock">
            </div>`;
            houseIcon.style.display = "flex"
    }
}

document.querySelector("body > div > div.pickArea > div.paperBtn.btn > img")
//TO DO:
//make your pick first and then computer should make a pick
//so user select image and then the computer's choice should appear afterwards
//after selection, selection pentagon should disappear
//add a play again button which should reset everything and make the pentagon reappear and selection should be hidden again


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


