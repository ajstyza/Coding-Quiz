var startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
console.log("begin quiz")
}

/*
function startQuiz()

function timer()
 
function askQuestion()

function AnswerQuestion() */

var output = document.getElementById("output");
var questionsArray = ["What does CSS stand for?", 
"What does HTML stand for?", 
"Which of the following are considered element tags?"]

    for (let i = 0; i < questionsArray.length; i++) {
        var randomQuestion = Math.floor(Math.random() * questionsArray.length);
        question = questionsArray[randomQuestion]; 
        output.innerHTML = randomQuestion;  
    }
// function changeQuestion()
