// JavaScript for interative game:

var questionNumber = 1;
var questionAsked = "What is the day today";
var questionCorrect = 0;
var Rank = 'Bronze';
var correctAnswer1 = "";
var correctAnswer2 = "";


function getQuestion(questionNumber){
	
	if (questionNumber == 2) {
		questionAsked = 'What is: 2 + 2 - 1 = ?  (Quick Mafs) [' + questionCorrect +' Correct Answers - Current Rank = ' + Rank + ' ]'
	}
	
	if (questionNumber == 3) {
		questionAsked = 'What animal goes moo? [' + questionCorrect +' Correct Answers - Current Rank = ' + Rank + ' ]'
	}
	
	if (questionNumber == 4) {
		questionAsked = 'How many fingers do humans have on one hand? [' + questionCorrect +' Correct Answers - Current Rank = ' + Rank + ' ]'
	}
	
	if (questionNumber == 5) {
		questionAsked = 'Who sings "I feel good"? [' + questionCorrect +' Correct Answers - Current Rank = ' + Rank + ' ]'
	}
	
	if (questionNumber == 6 && Rank == "Bronze") {
		endGame()
		questionAsked = 'Dam Daniel! Go back to high school! You answered ' + questionCorrect +' questions correctly and earned a Rank of - ' + Rank;
	}
	
	if (questionNumber == 6 && Rank == "Silver"){
		endGame()
		questionAsked = 'Not Bad! You answered ' + questionCorrect +' questions correctly and earned a Rank of - ' + Rank;
	}
	
	if (questionNumber == 6 && Rank == "Gold"){
		endGame()
		questionAsked = 'Awesome! You answered ' + questionCorrect +' questions correctly and earned a Rank of - ' + Rank;
	}
	
	question = document.getElementById('question');
	question.innerHTML = questionAsked;
}


function answerQuestion() {
	
	var answer = document.getElementById('answer').value;
	
	if (questionNumber == 1){
		var d = new Date();
		var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
		correctAnswer1 = (days[d.getDay()]);
		
	}
	else if (questionNumber == 2){
		correctAnswer1 = "three";
		correctAnswer2 = 3;
	}
	else if (questionNumber == 3){
		correctAnswer1 = "cow";
	}
	else if (questionNumber == 4){
		correctAnswer1 = "five";
		correctAnswer2 = 5;
	}
	else if (questionNumber == 5){
		correctAnswer1 = "james brown";
	}
	if ( answer.toLowerCase() === correctAnswer1 || parseInt(answer) === correctAnswer2) {
		var failAlert = document.getElementById('fail-alert-box');
		failAlert.classList.add("hide");
		var successAlert = document.getElementById('success-alert-box');
		successAlert.classList.remove("hide");
		questionCorrect += 1;
		if (questionCorrect < 5 && questionCorrect > 2) {
			Rank = 'Silver';
		}
		else if (questionCorrect === 5){
			Rank = 'Gold';
		 }
    }
	else {
		var successAlert = document.getElementById('success-alert-box');
		successAlert.classList.add("hide");
		var failAlert = document.getElementById('fail-alert-box');
		failAlert.classList.remove("hide");
	}
	
	questionNumber += 1;
	document.getElementById('answer').value = "";
	getQuestion(questionNumber)	
}



function startGame() {
	var startButton = document.getElementById('start-button');
	var submitButton = document.getElementById('submit-button');
	var answrBox = document.getElementById('answer-box');
	var questionHeading = document.getElementById('question-heading');
	
	startButton.classList.add("hide");
	submitButton.classList.remove("hide");
	answrBox.classList.remove("hide");
	questionHeading.classList.remove("hide");
	
	var question = document.getElementById('question');
	question.innerHTML = questionAsked;
}

function endGame() {
	var startButton = document.getElementById('start-button');
	var submitButton = document.getElementById('submit-button');
	var answrBox = document.getElementById('answer-box');
	var questionHeading = document.getElementById('question-heading');
	var successAlert = document.getElementById('success-alert-box');
	var failAlert = document.getElementById('fail-alert-box');
	failAlert.classList.add("hide");
	successAlert.classList.add("hide");
	
	startButton.classList.add("hide");
	submitButton.classList.add("hide");
	answrBox.classList.add("hide");
	questionHeading.classList.add("hide");
	
	var question = document.getElementById('question');
	question.innerHTML = questionAsked;
}