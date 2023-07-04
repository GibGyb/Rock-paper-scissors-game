const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "Error input";
  }
};
// **console.log(getUserChoice('rock'));

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

// console.log(getComputerChoice());

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
    if (computerChoice === "scissor") {
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
  }
};

// console.log(determineWinner('rock','scissors'));

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log(`You thew: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
