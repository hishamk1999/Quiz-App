import Question from "./IF_Question.js";
import QuizApp from "./QuizApp.js";

const q1 = new Question("Which of these fruits ?", "Mango", [
	"Mango",
	"Tomato",
	"Fish",
	"Egg",
]);

const q2 = new Question(
	"What are two things you can never eat for breakfast ?",
	"Lunch and Dinner",
	["Cheese", "Lunch and Dinner", "lunch", "Dinner"]
);
const q3 = new Question("Which of these fruits ?", "Mango", [
	"Mango",
	"Tomato",
	"Fish",
	"Egg",
]);

let quiz = new QuizApp([q1, q2, q3]);
