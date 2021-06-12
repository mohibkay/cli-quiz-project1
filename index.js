const readlineSync = require("readline-sync");

let score = 0;

const highScores = [
  {
    name: "dali",
    score: 2,
  },

  {
    name: "orwell",
    score: 1,
  },
];

const questions = [
  {
    question: "Where do I live? ",
    options: ["Jamshedpur", "Jamtara"],
    answer: "Jamshedpur",
  },
  {
    question: "My favourite CSS library/framework would be? ",
    options: ["Bootstrap", "TailwindCSS"],
    answer: "TailwindCSS",
  },
  {
    question: "First song I sang in TeamTanay's discord's server? ",
    options: ["Perfect", "Teri Jhuki Nazar"],
    answer: "Teri Jhuki Nazar",
  },
];

function welcome() {
  const username = readlineSync.question("What's your name? ");

  console.log("Welcome, " + username + ", to DO YOU KNOW Mohib?");
  return username;
}

function play(question, options, answer) {
  const index = readlineSync.keyInSelect(options, question);

  if (options[index].toLowerCase() === answer.toLowerCase()) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (item of questions) {
    const { question, options, answer } = item;
    play(question, options, answer);
  }
}

function showScores(currentUser) {
  if (score >= 3) {
    highScores.unshift({
      name: currentUser,
      score,
    });
    console.log("Whoa! You scored the highest: ", score);

    console.log("Check out the score board, you are in it");
  } else {
    console.log("You scored: ", score);
    console.log("Check out the high scores");
  }

  highScores.map((item) => console.log(item.name, " : ", item.score));
}
const currentUser = welcome();
game();
showScores(currentUser);
