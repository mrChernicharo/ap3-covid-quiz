import { questions as allQuestions } from "./data.js";
import {
  getCheckedOption,
  shuffleAnswers,
  generateRandomIndex,
} from "./utils.js";

let correctAnswer;
export let score = 0;
let rounds = 0;
let qtdRounds = 10;
let selectedQuestion;
let currentQuestionId;
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
  let index = generateRandomIndex(questions_array);
  console.log("index: " + index + ".  CurrentQuestionId: " + currentQuestionId);

  let selectedQuestion = questions_array[index];

  if (selectedQuestion.id === currentQuestionId) {
    console.log("dispositivo pra evitar repetição da mesma pergunta");
    if (index === questions_array.length - 1) {
      console.log("coé aldir");
      selectedQuestion = questions_array[0];
    } else {
      selectedQuestion = questions_array[index + 1];
    }
  }
  currentQuestionId = selectedQuestion.id;

  return shuffleAnswers(selectedQuestion);
}

function renderQuestion(question) {
  if (rounds >= qtdRounds) {
    // fim de jogo
    rounds = 0;
    window.location.assign(`final.html?rounds=${qtdRounds}&score=${score}`);
  }

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

  console.log(chosenOpt);

  if (playerWins) {
    console.log("certa resposta!");
    // alert("certa resposta!");
    messageDiv.style.backgroundColor = "#08cf75";
    score++;
    scorePanel.innerText = score;
  } else {
    console.log("errou!");
    messageDiv.style.backgroundColor = "red";
  }

  console.log(messages[chosenOpt]);
  messageDiv.innerHTML = `<span>${messages[chosenOpt]}</span>`;

  setTimeout(() => nextQuestion(score), 3000);
}

function nextQuestion(points) {
  console.log("próxima pergunta! ");
  console.log(points);
  btnPressed = false;
  messageDiv.style.backgroundColor = "transparent";

  selectedQuestion = pickQuestion(allQuestions);
  renderQuestion(selectedQuestion);
}

main();
