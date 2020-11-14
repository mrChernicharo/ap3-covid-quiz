export function getCheckedOption() {
  const inputs = document.getElementsByTagName("input");
  let selectedOption;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      selectedOption = i;
      // console.log("checked -> " + selectedOption);
    }
  }

  return selectedOption;
}

export function shuffleAnswers(question_obj = {}) {
  if (!question_obj.answers) return;

  let unshuffled = question_obj.answers;

  let shuffled = unshuffled
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return {
    id: question_obj.id,
    question: question_obj.question,
    imgUrl: question_obj.imgUrl,
    answers: [...shuffled],
  };
}

export function generateRandomIndex(array) {
  console.log("lenght -> " + array.length);
  const max = array.length;
  const min = 0;
  const random = (Math.random() * (max - min + 1)) << 0;
  return random;
}
