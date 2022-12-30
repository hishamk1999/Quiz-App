const questionDom = document.getElementById("question");
const AnswersDom = document.getElementById("Answers");

const QuestionNum = document.getElementById("QuestionNum");
const currentQDom = document.getElementById("currentQ");
const numOfAllQuesDom = document.querySelectorAll(".numOfAllQues");
const rightAnsDom = document.getElementById("rightAns");
const resultBox = document.getElementById("result");

let utilityArr = [questionDom, AnswersDom, QuestionNum];

export default class QuizApp {
	/**
	 * @param {[object]} arrOfQuestions:
	 */
	constructor(arrOfQuestions) {
		this.arrOfQuestions = arrOfQuestions;
		this.currentQuestionNum = 0;
		this.numOfQuestions = 0;
		this.numOfRightAnswers = 0;
		this.labelArrayDom = [
			document.getElementById("labA"),
			document.getElementById("labB"),
			document.getElementById("labC"),
			document.getElementById("labD"),
		];
		this.inputId = ["ansA", "ansB", "ansC", "ansD"];

		this.arrOfAnsPlaceHolder = [];

		this.startQuizBtn = document.getElementById("startBtn");
		this.startQuizBtn.addEventListener("click", this.renderHTML.bind(this));

		this.nextBtn = document.getElementById("next");
		this.nextBtn.addEventListener("click", this.renderHTML.bind(this));

		this.finishBtn = document.getElementById("finish");
		this.finishBtn.addEventListener("click", () => {
			location.reload();
		});
	}

	renderHTML() {
		if (this.currentQuestionNum < this.arrOfQuestions.length) {
			this.uiHandler();

			// here show the current question
			currentQDom.removeChild(currentQDom.firstChild);
			currentQDom.textContent = this.currentQuestionNum + 1;

			// here show numbers of Questions
			numOfAllQuesDom.forEach((ele) => {
				ele.removeChild(ele.firstChild);
				ele.textContent = this.arrOfQuestions.length;
			});

			// here render Question in html.
			questionDom.childNodes[1].innerText =
				this.arrOfQuestions[this.currentQuestionNum].Question;
			// here render AnswersDom
			this.labelArrayDom.forEach((ele, index) => {
				// removeChild all old elements
				while (ele.lastChild) {
					ele.removeChild(ele.lastChild);
				}
				// createElement ("input") Tag
				const inputTag = document.createElement("input");
				inputTag.setAttribute("type", "radio");
				inputTag.setAttribute("name", "answer");
				inputTag.setAttribute("id", `${this.inputId[index]}`);
				inputTag.classList.add(`input`);
				// createElement ("p") Tag
				const pTag = document.createElement("p");
				pTag.classList.add("col-11");
				pTag.classList.add("mb-0");
				pTag.classList.add("fs-5");
				pTag.classList.add("theAns");
				// add text to the ("p") tag
				pTag.textContent =
					this.arrOfQuestions[this.currentQuestionNum].arrOfAllAnswerArr[index];
				// appendChild ("input") inside ("label") tag
				ele.appendChild(inputTag);
				// appendChild ("p") inside ("label") tag
				ele.appendChild(pTag);
			});

			this.answerChecker(this.currentQuestionNum);

			this.nextBtnHandler();
		} else {
			this.finishQuizBtnHandler();
		}
	}

	uiHandler() {
		utilityArr.push(this.nextBtn);
		utilityArr.forEach((ele) => {
			ele.style.display = "block";
		});
		this.startQuizBtn.style.display = "none";
	}
	nextBtnHandler() {
		this.currentQuestionNum++;
	}
	answerChecker(currentNumOfQuestion) {
		const InputDom = document.querySelectorAll(".input");
		const that = this;

		InputDom.forEach((inp) => {
			inp.addEventListener("click", function (e) {
				e.target.nextSibling.innerText ===
				that.arrOfQuestions[currentNumOfQuestion].theCorrectAnswer
					? (that.arrOfQuestions[currentNumOfQuestion].answerStatus = true)
					: (that.arrOfQuestions[currentNumOfQuestion].answerStatus = false);
			});
		});
	}

	finishQuizBtnHandler() {
		resultBox.style.display = "block";

		utilityArr.forEach((ele) => {
			ele.style.display = "none";
		});

		this.finishBtn.style.display = "block";
		this.nextBtn.style.display = "none";

		this.arrOfQuestions.forEach((que) => {
			que.answerStatus === true ? this.numOfRightAnswers++ : "";
			console.log(que);
		});

		rightAnsDom.removeChild(rightAnsDom.firstChild);
		rightAnsDom.textContent = this.numOfRightAnswers;
	}
}
