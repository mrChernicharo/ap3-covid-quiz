export function getCheckedOption() {
  const inputs = document.getElementsByTagName("input");
  let selectedOption;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      selectedOption = i;
      console.log("checked -> " + selectedOption);
    }
  }

  return selectedOption;
}

export function shuffleAnswers(question_obj) {
  if (!question_obj.answers) return;

  let unshuffled = question_obj.answers;

  let shuffled = unshuffled
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return { question: question_obj.question, answers: [...shuffled] };
}
