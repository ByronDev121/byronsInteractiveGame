var questionNumber = 0;
var questionsCorrect = 0;
var rank = 'Bronze';

function submitAnswer() {
	validateAnswer();
	clearAnswerInputField();
	updateRank();

	if (isGameEnded()) {
		endGame();
	} else {
		updateNextQuestion();
	}
	return false;
}

function validateAnswer() {
	var answer = document.getElementById('answer').value.toLowerCase();

	var correctTextAnswers = [getTodayAsString(), "three", "cow", "five", "james brown"];
	var correctIntAnswers = [null, 3, null, 5, null];

	if (answer === correctTextAnswers[questionNumber - 1] ||
		parseInt(answer) === correctIntAnswers[questionNumber - 1]) {
		showAnswerResultAlert(true);
		questionsCorrect += 1;
	}
	else {
		showAnswerResultAlert(false);
	}
}

function getTodayAsString() {
	var d = new Date();
	var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	return days[d.getDay()];
}

function showAnswerResultAlert(result) {
	var failAlert = document.getElementById('fail-alert-box');
	var successAlert = document.getElementById('success-alert-box');

	if (result) {
		failAlert.classList.add("hide");
		successAlert.classList.remove("hide");
	} else {
		failAlert.classList.remove("hide");
		successAlert.classList.add("hide");
	}
}

function clearAnswerInputField() {
	document.getElementById('answer').value = "";
}

function updateRank() {
	if (questionsCorrect < 5 && questionsCorrect > 2) {
		rank = 'Silver';
	} else if (questionsCorrect === 5) {
		rank = 'Gold';
	}
}

function isGameEnded() {
	return questionNumber >= 5;
}

function updateNextQuestion() {

	var questions = [
		"What is the day today?",
		"What is: 2 + 2 - 1 = ?  (Quick Mafs)",
		"What animal goes moo?",
		"How many fingers do humans have on one hand?",
		"Who sings 'I feel good'?"
	];

	var question = questions[questionNumber] + getQuestionsCorrectAndRank();
	document.getElementById('question').innerHTML = question;

	questionNumber += 1;
}

function getQuestionsCorrectAndRank() {
	return ' [' + questionsCorrect + ' Correct Answers - Current Rank = ' + rank + ' ]';
}

function endGame() {
	displayResults();

	document.getElementById('start-button').classList.add("hide");
	document.getElementById('submit-button').classList.add("hide");
	document.getElementById('answer-box').classList.add("hide");
	document.getElementById('question-heading').classList.add("hide");
	document.getElementById('success-alert-box').classList.add("hide");
	document.getElementById('fail-alert-box').classList.add("hide");
}

function displayResults() {
	var result;

	if (rank == "Bronze") {
		result = 'Dam Daniel! Go back to high school! You answered ' + questionsCorrect + ' questions correctly and earned a Rank of - ' + rank;
	}
	if (rank == "Silver") {
		result = 'Not Bad! You answered ' + questionsCorrect + ' questions correctly and earned a Rank of - ' + rank;
	}
	if (rank == "Gold") {
		result = 'Awesome! You answered ' + questionsCorrect + ' questions correctly and earned a Rank of - ' + rank;
	}

	document.getElementById('question').innerHTML = result;
}


function startGame() {
	document.getElementById('start-button').classList.add("hide");
	document.getElementById('submit-button').classList.remove("hide");
	document.getElementById('answer-box').classList.remove("hide");
	document.getElementById('question-heading').classList.remove("hide");

	updateNextQuestion();
}