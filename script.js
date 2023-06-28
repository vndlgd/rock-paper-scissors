// list of available choices in game
const choices = ["rock", "paper", "scissors"];

// initial score of users at start of game
let userScore = 0;
let computerScore = 0;

// retrieve a random choice in choices list to assign to computerSelection
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let results = "";

    // store results for whoever wins this current round
    results = getRoundWinner(playerSelection, computerSelection);

    // error catching
    if (results === "") {
        console.error("You have a bug");
    }

    updateScores(results);

    return results;
}

function getRoundWinner(playerSelection, computerSelection) {
    // make user input case insensitive
    playerSelection = playerSelection.toLowerCase();

    // if user chooses same choice as computer 
    if (playerSelection === computerSelection) {
        results = "It's a Tie!";
    }

    // if user chooses rock
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            results = "You Lose! Paper beats Rock";
        }
        else if (computerSelection === "scissors") {
            results = "You Win! Rock beats Paper";
        }
    }

    // if user chooses paper
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            results = "You Win! Paper beats Rock";
        }
        else if (computerSelection === "scissors") {
            results = "You Lose! Scissors beats Paper";
        }
    }

    // if user chooses scissors
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
    let playerSelection = prompt("Enter your choice (rock, paper, scissors):");
    let computerSelection = GetComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    printGameWinner();
}

// play game 
game();
