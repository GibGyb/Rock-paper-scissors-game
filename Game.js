const readlineSync = require("readline-sync");

const userInput = readlineSync.question("Your threw: ");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  const array1 = ["rock", "paper", "scissors", "bomb"];
  if (array1.includes(userInput)) {
    return userInput;
  } else {
    return "Error input";
    console.log("Error input");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won";
    } else {
      return "User won";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won";
    } else {
      return "User won";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won";
    } else {
      return "User won";
    }
  } else if (userChoice === "bomb") {
    return "User won";
  } else {
    return "Program cannot run, please check input.";
  }
};

const playGame = () => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  console.log(`Computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
