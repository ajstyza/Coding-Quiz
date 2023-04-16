var startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    console.log("begin quiz")
    }

//

var output = document.getElementById("output");

var optionButton = document.getElementsByClassName("option-btn");
optionButton.addEventListener('click', Answer);


function Answer() {
    console.log("button has been clicked")    
}

function showQuestion(questions){

}

var questions = {
    
        question1: "What does CSS stand for?",
        choices1: ["Cascading Style Strands","Cucumbers-Salamanders-Squash","Cascading Style Sheets","It stands for nothing because it has no beliefs"],
        answer1: "Cascading Style Sheets",
    
} 


// var questionContainer = document.querySelector(".question-container");
   // questionContainer.style.display = "none";

    //use querySelectorAll make sure to loop thru the whole array so all buttons work 

/*
   function askQuestion() {
        var randomQuestion = Math.floor(Math.random() * questionsArray.length); // 0 to 2
        question = questionsArray[randomQuestion]; 
        output.innerHTML = question; 
   }
    
   
   // if ((question === "what does CSS stand for") &&
 //  (answer === "Cascading Style Sheets") 







// function changeQuestion()

function startQuiz()

function timer()
 
function askQuestion()

function AnswerQuestion() 

*/