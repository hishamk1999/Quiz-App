/**
 * @interface Question  Interface for classes that represent a Question.
 */

class Question {
	/**
	 * @param {string}  theQuestion: Expect the question.
	 * @param {string} theCorrectAnswer : Expect the correct answer.
	 * @param {string}  allAnswerArr: All the answer stored in the answer array.
	 */
	constructor(theQuestion, theCorrectAnswer, allAnswerArr) {
		this.Question = theQuestion;
		this.theCorrectAnswer = theCorrectAnswer;
		this.arrOfAllAnswerArr = allAnswerArr;

		this.answerStatus = false;
	}
}
export default Question;
