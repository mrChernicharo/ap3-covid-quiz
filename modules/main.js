import { questions as allQuestions } from "./data.js";
import { pickQuestion, renderQuestion } from "./utils.js";

console.log(allQuestions);

const pickedQuestion = pickQuestion(allQuestions);
const responseObj = renderQuestion(pickedQuestion);

console.log(responseObj);
