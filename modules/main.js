import { questions as allQuestions } from "./data.js";
import { getCheckedOption, shuffleAnswers } from "./utils.js";

let correctAnswer;
let score = 0;
let selectedQuestion;

function main() {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", (event) => {
    getResult();
  });
  selectedQuestion = "";
  selectedQuestion = pickQuestion(allQuestions);
  renderQuestion(selectedQuestion);
}

function pickQuestion(questions_array) {
  const max = questions_array.length;
  const min = 0;
  const random = (Math.random() * (max - min + 1)) << 0;

  const selectedQuestion = questions_array[random];

  return shuffleAnswers(selectedQuestion);
}

function renderQuestion(question) {
  const h1 = document.getElementById("title");
  h1.innerText = question.question;
  const labels = document.getElementsByTagName("label");
  const img = document.getElementById("img");

  img.setAttribute("src", question.imgUrl);
  console.log(question.imgUrl);

  question.answers.map((answer, i) => {
    labels[i].innerText = answer.content;
    if (answer.isCorrect) {
      correctAnswer = i;
    }
  });
}

function getResult() {
  // const returnObj = { checkedOption: getCheckedOption(), correctAnswer };
  // console.log(returnObj);
  const scorePanel = document.getElementById("score");
  const btn = document.getElementById("btn");
  console.log(btn);

  btn.removeEventListener("click", this);

  const playerWins = getCheckedOption() === correctAnswer ? true : false;

  if (playerWins) {
    console.log("certa resposta!");

    alert("certa resposta!");

    score++;
    scorePanel.innerText = score;
  } else {
    console.log("errou!");
  }

  nextQuestion(score);
}

function nextQuestion(points) {
  console.log("próxima pergunta! ");
  console.log(points);
  selectedQuestion = pickQuestion(allQuestions);
  renderQuestion(selectedQuestion);
}

main();
