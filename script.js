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
        window.alert("You win, Rock beats Scissors");
        return "win";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        window.alert("You win, Paper beats Rock");
        return "win";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        window.alert("You win, Scissors beats Paper");
        return "win";
    }
    else if (playerSelection === computerSelection) {
        window.alert("It's a draw, no winner this time");
        return "draw";
    }
    else {
        window.alert("You lose, " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        return "lose";
    }
}


function game() {
    let wins = 0;
    let loses = 0;

    for (i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
    
        const result = playRound(playerSelection, computerSelection);
        const resultSlice = result.slice(0, 5);

        if (resultSlice === "win") {
            wins++;
        }
        else if (resultSlice == "lose") {
            loses++;
        }
    }

    if (wins > loses) {
        window.alert("You win more rounds than the IA, you have defeated the super IA, the world is safe now");
    }
    else if (loses > wins) {
        window.alert("You lose more rounds than the IA, the IA now control the world");
    }
    else {
        window.alert("It's a draw, you are a good competitor for defeat the super IA");
    }
}

game();