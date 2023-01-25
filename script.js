function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)]; 
}

function getPlayerChoice() {
    do {
        notCorrectInput = true;
        let playerChoice = prompt("Rock, Paper or Scissors ?", "Rock");
        let playerChoiceLow = playerChoice.toLowerCase();
        if(playerChoiceLow === "rock" || playerChoiceLow === "paper" || playerChoiceLow === "scissors")
        {
            notCorrectInput = false;
            return playerChoiceLow;
        }
        else {
            window.alert("Wrong input, please retry");
        }
    }
    while(notCorrectInput)
    
}

getPlayerChoice();