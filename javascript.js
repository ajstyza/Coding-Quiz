var startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);
var questionContainer = document.querySelector(".question-container");
questionContainer.style.display = "none";

// this function reveals the questions and begins timer upon pressing start button.
function startQuiz() {
    questionContainer.style.display = "block";
    countDown();
    }

    // Timer and Countdown (still need to add penalty, where timer subtracts when an answer is wrong)
    var timeEl = document.getElementById('count');
    function countDown() {
        var timeLeft = 60;
        var timeInterval = setInterval(function() {
       if(timeLeft > 1) {
        timeEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
       }
       else if(timeLeft === 1) {
        timeEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
       }
       else if(timeLeft < 1) {
       timeEl.textContent = '';
    
       clearInterval(timeInterval);}
        }, 1000);
    }
    
 //  

// var output = document.getElementById("output");

// working with question/answer objects.
var questionContainer = document.querySelector(".question-container");
 questionContainer.addEventListener('click', function(event){
    var element = event.target;

    if (element.matches("button")) && () {

       //console.log("button clicked");

   }
 });

 function Answer() {

 }

 
var questions = {  
        question: "What does CSS stand for?",
        choices: ["Cascading Style Strands","Cucumbers-Salamanders-Squash","Cascading Style Sheets","It stands for nothing because it has no beliefs"],
        answer: "Cascading Style Sheets",   
} 

localStorage.setItem("questions", JSON.stringify(questions))
 });

function ShowQuestion()

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