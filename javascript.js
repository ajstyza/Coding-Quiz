
var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', displayWrongResult);
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', displayWrongResult);
var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', showQuestion2, displayCorrectResult);
var btn4 = document.getElementById('btn4');
btn4.addEventListener('click', displayWrongResult);
// 
var startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);
var questionContainer = document.querySelector(".question-container");
questionContainer.style.display = "none";
var rightContainer = document.querySelector('.rightContainer');
rightContainer.style.display = "none";
var wrongContainer = document.querySelector('.wrongContainer');
wrongContainer.style.display = "none";
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
    

const question1 = {  
        questionChoice1: "What does CSS stand for?",
        choices: ["Cascading Style Strands","Cucumbers-Salamanders-Squash","Cascading Style Sheets","It stands for nothing because it has no beliefs"],
        answer: "Cascading Style Sheets",   
};
const question2 = {
        questionChoice2: "What does HTML stand for?",
        choices2: ["Hyper Text Main Portal", "Hyper Toast Main Pudding", "Hyphen Trophy Miniscule Lemmings", "Hyper Text Transport Protocol"],
        answer2: "Hyper Text Transport Protocol",
} ;   
console.log (question1.choices[1]);

function showQuestion1() {
    document.getElementById('question-area').innerText = question1.questionChoice1;
    document.getElementById('btn1').innerText = question1.choices[0];
    document.getElementById('btn2').innerText = question1.choices[1];
    document.getElementById('btn3').innerText = question1.choices[2];
    document.getElementById('btn4').innerText = question1.choices[3];
    // if(btn3){
    //     displayCorrectResult
    // }
    // else {
    //     displayWrongResult
    // };     
    };

showQuestion1();

function showQuestion2(){
  
    document.getElementById('question-area').innerText = question2.questionChoice2;
    document.getElementById('btn1').innerText = question2.choices2[0];
    document.getElementById('btn2').innerText = question2.choices2[1];
    document.getElementById('btn3').innerText = question2.choices2[2];
    document.getElementById('btn4').innerText = question2.choices2[3];
    // if(btn4) {
    //     displayCorrectResult()
    // }
    //     else {
    //        displayWrongResult
    //     }
    };

    function displayCorrectResult() {
        rightContainer.style.display = "block";
    };

    function displayWrongResult() {
        wrongContainer.style.display = "block";
    };
