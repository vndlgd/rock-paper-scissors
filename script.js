// declare an array of choices available
const choices = ["rock", "paper", "scissors"];

// declare initial score at start of game
let userScore = 0;
let computerScore = 0;


function GetComputerChoice() {
    // function to return random choice in array
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // declare results variable
    let results = "";

    // get results for whoever wins this current round
    results = getRoundWinner(playerSelection, computerSelection);

    // error catching
    if (results === "") {
        console.error("You have a bug");
    }

    updateScores(results);

    return results;
}

// determine who wins each round
function getRoundWinner(playerSelection, computerSelection) {
    // make user input case insensitive
    playerSelection = playerSelection.toLowerCase();

    // if both users input same choice
    if (playerSelection === computerSelection) {
        results = "It's a Tie!";
    }

    // user chose rock
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            results = "You Lose! Paper beats Rock";
        }
        else if (computerSelection === "scissors") {
            results = "You Win! Rock beats Paper";
        }
    }

    // user chose paper
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            results = "You Win! Paper beats Rock";
        }
        else if (computerSelection === "scissors") {
            results = "You Lose! Scissors beats Paper";
        }
    }

    // user chose scissors
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            results = "You Lose! Rock beats Scissors";
        }
        else if (computerSelection === "paper") {
            results = "You Win! Scissors beats Paper";
        }
    }

    return results;
}

function updateScores(result) {
    if (result.substring(0, 7) === "You Win") {
        userScore += 1;
    }
    else if (result.substring(0, 8) === "You Lose") {
        computerScore += 1;
    }
}

// print winner of the game
function printGameWinner() {
    if (userScore > computerScore) {
        console.log("You Won!");
    }
    else if (computerScore > userScore) {
        console.log("You Lost!");
    }
    else {
        console.log("It's a Tie!");
    }
}


function game() {
    // loop 5 rounds 
    for (let i = 0; i < 5; i++) {
        // prompt user for input
        let playerSelection = prompt("Enter your choice (rock, paper, scissors):");
        // get computer choice
        let computerSelection = GetComputerChoice();
        // store the result of that round in results variable
        let result = playRound(playerSelection, computerSelection);
        // display results
        console.log(result);
    }
    printGameWinner();
}

game();
