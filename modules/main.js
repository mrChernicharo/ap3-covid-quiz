import { questions as allQuestions } from "./data.js";
import { getCheckedOption, shuffleAnswers } from "./utils.js";

let correctAnswer;
let score = 0;
let rounds = 0;
let selectedQuestion;
let btnPressed = false;
let messages = [];
const messageDiv = document.getElementById("messageDiv");

function main() {
  const btn = document.getElementById("btn");

  selectedQuestion = "";
  selectedQuestion = pickQuestion(allQuestions);
  renderQuestion(selectedQuestion);

  btn.addEventListener("click", (event) => {
    if (!btnPressed) {
      btnPressed = true;

      getResult();
    }
  });
}

function pickQuestion(questions_array) {
  const max = questions_array.length;
  const min = 0;
  const random = (Math.random() * (max - min + 1)) << 0;

  const selectedQuestion = questions_array[random];

  return shuffleAnswers(selectedQuestion);
}

function renderQuestion(question) {
  rounds++;
  const roundsPanel = document.getElementById("rounds");
  roundsPanel.innerText = rounds;
  const h1 = document.getElementById("title");
  h1.innerText = question.question;
  const labels = document.getElementsByTagName("label");
  const img = document.getElementById("img");

  img.setAttribute("src", question.imgUrl);
  // console.log(question.imgUrl);

  messages.length = 0;

  question.answers.map((answer, i) => {
    labels[i].innerText = answer.content;
    messages.push(answer.message);
    if (answer.isCorrect) {
      correctAnswer = i;
    }
  });

  messageDiv.innerHTML = "";
  console.log(messages);
}

function getResult() {
  const btn = document.getElementById("btn");
  console.log(btn);

  btn.removeEventListener("click", this);
  const scorePanel = document.getElementById("score");

  const chosenOpt = getCheckedOption();

  const playerWins = getCheckedOption() === correctAnswer ? true : false;

  if (playerWins) {
    console.log("certa resposta!");

    // alert("certa resposta!");

    score++;
    scorePanel.innerText = score;
  } else {
    console.log("errou!");
  }

  console.log(messages[chosenOpt]);

  messageDiv.innerHTML = `<span>${messages[chosenOpt]}</span>`;

  setTimeout(() => nextQuestion(score), 3000);
}

function nextQuestion(points) {
  console.log("próxima pergunta! ");
  console.log(points);
  btnPressed = false;

  selectedQuestion = pickQuestion(allQuestions);
  renderQuestion(selectedQuestion);
}

main();
