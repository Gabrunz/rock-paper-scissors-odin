function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)]; 
}

function getPlayerChoice() {
    notCorrectInput = true;
    while(notCorrectInput) {
        let playerChoice = prompt("Rock, Paper or Scissors ?", "Rock");
        let playerChoiceLow = playerChoice.toLowerCase();
        if(playerChoiceLow === "rock" || playerChoiceLow === "paper" || playerChoiceLow === "scissors")
        {
            return playerChoiceLow;
        }
        else {
            window.alert("Wrong input, please retry");
        }
    }
    
}

