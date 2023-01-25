function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    do {
        notCorrectInput = true;
        const playerChoice = prompt("Rock, Paper or Scissors ?", "Rock");
        const playerChoiceLow = playerChoice.toLowerCase();
        if (playerChoiceLow === "rock" || playerChoiceLow === "paper" || playerChoiceLow === "scissors") {
            notCorrectInput = false;
            return playerChoiceLow;
        }
        else {
            window.alert("Wrong input, please retry");
        }
    }
    while (notCorrectInput)

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, Paper beats Rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win, Scissors beats Paper";
    }
    else if (playerSelection === computerSelection) {
        return "It's a draw, no winner this time";
    }
    else {
        return "You lose, " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }
}


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function game() {
    let wins = 0;
    let loses = 0;

    for (i = 0; i < 5; i++) {

    }
}