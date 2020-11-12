export function pickQuestion(questions_array) {
  const max = questions_array.length;
  const min = 0;
  const random = (Math.random() * (max - min + 1)) << 0;

  const selectedQuestion = questions_array[random];

  return shuffleAnswers(selectedQuestion);
}

export function renderQuestion(question) {
  const h1 = document.getElementById("title");
  h1.innerText = question.question;

  const labels = document.getElementsByTagName("label");
  const btn = document.getElementById("btn");

  let correctAnswer;
  question.answers.map((answer, i) => {
    labels[i].innerText = answer.content;
    if (answer.isCorrect) {
      correctAnswer = i;
    }
  });
  console.log("correctAnswer");
  console.log(correctAnswer);

  btn.addEventListener("click", (event) => {
    const returnObj = { option: getCheckedOption(), correctAnswer };
    console.log(returnObj);
    return returnObj;
  });
}

function getCheckedOption() {
  const inputs = document.getElementsByTagName("input");
  let selectedOption;
  // console.log("inputs");
  // console.log(inputs);
  for (let i = 0; i < inputs.length; i++) {
    // console.log(inputs[i].attributes);

    if (inputs[i].checked) {
      selectedOption = i;
      console.log("checked -> " + selectedOption);
    }
  }

  return selectedOption;
}

function shuffleAnswers(question_obj) {
  let unshuffled = question_obj.answers;

  let shuffled = unshuffled
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return { question: question_obj.question, answers: [...shuffled] };
}
