const quoteDisplayElement = document.querySelector('#quoteDisplay');
const quoteInputElement = document.querySelector('#quoteInput');
const startGameButton = document.querySelector('#button');
const startEasyMode = document.querySelector('#buttonEasy');
const startMediumMode = document.querySelector('#buttonMedium');
const startHardMode = document.querySelector('#buttonHard');
const countdownDisplay = document.querySelector('#countdown');
const timerDisplay = document.querySelector("#timer");
const resetGameButton = document.querySelector('#reset');
const wpmScoreDisplay = document.querySelector('#wpmScore');
const timeScoreDisplay = document.querySelector('#timeScore');
const playAudio = document.querySelector('#audio');

var curr_input = "";
var curr_quote = "";
let countdowntime = 6;
let timertime = -6;
var score = 0;
var timerVar = "";
var countdownVar = "";
var wpm = "";
var wordTracker = 0;

const levels = {
    easy: 5,
    medium: 10,
    hard: 15
};

quoteInputElement.classList.add("hidden");//hides input box before game starts
timerDisplay.classList.add("hidden");

const sentences = [
    "I am what I am, an' I'm not ashamed.",
    "Time will not slow down when something unpleasant lies ahead.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "It does not do to dwell on dreams and forget to live",
];

function ChooseGameMode(){
    startGameButton.classList.add("hidden");
    startEasyMode.classList.remove("hidden");
    startMediumMode.classList.remove("hidden");
    startHardMode.classList.remove("hidden");
}

function ChooseGameEasy(){
    startEasyMode.classList.add("hidden");
    startMediumMode.classList.add("hidden");
    startHardMode.classList.add("hidden");
    scoreMax = levels.easy;
    startGame();
}

function ChooseGameMedium(){
    startEasyMode.classList.add("hidden");
    startMediumMode.classList.add("hidden");
    startHardMode.classList.add("hidden");
    scoreMax = levels.medium;
    startGame();
}

function ChooseGameHard(){
    startEasyMode.classList.add("hidden");
    startMediumMode.classList.add("hidden");
    startHardMode.classList.add("hidden");
    scoreMax = levels.hard;
    startGame();
}

function startGame(){
    initializeGame();
    renderNewQuote();//first quote generated
    console.log(curr_quote);

    let current = true;
    document.addEventListener("input", () => {
        const arrayQuote = quoteDisplayElement.querySelectorAll('span');
        const arrayValue = quoteInputElement.value.split('');//splits the input by element


        arrayQuote.forEach((characterSpan, index) => { //creates a span around each element of the quoteDisplay
            const character = arrayValue[index] //character = element from the input
            if (character === characterSpan.innerText) {
                characterSpan.classList.remove("bad");
                characterSpan.classList.add("good");
                current = true;
                console.log(current);
            } else if (character == null){ //if there's no input, does nothing
                characterSpan.classList.remove("bad");
                characterSpan.classList.remove("good");
                current = false;
            } else {
                characterSpan.classList.add("bad");
                characterSpan.classList.remove("good");
                current = false;
                console.log(current);
            }
        })
        if (current) {// at the end if the last element of input == last characterSpan value, it'll generate new quote
            renderNewQuote();
            score++;
            console.log(score);
	    playAudio.play();
        }
        if (score == scoreMax){
            gameOverPopup();
            quoteDisplayElement.classList.add("hidden");
		
        }
    });
}

function initializeGame(){
    startGameButton.classList.add("hidden");
    countdownVar = setInterval(countdown, 1000);
    timerVar = setInterval(timer, 1000);
}

function countdown(){
  if (countdowntime > 0) { // Make sure time is not run out
    countdowntime--; // Decrement
    countdownDisplay.innerHTML = "Game Will Start In: " + countdowntime;
  }else if (countdowntime === 0) {
    countdownDisplay.classList.add("hidden");//adds countdown display
    quoteInputElement.classList.remove("hidden");
    clearInterval(countdownVar);
  }
}

function timer(){
    if (timertime >=0){
        timerDisplay.classList.remove("hidden");
    }
    timertime++;
    timerDisplay.innerHTML = "Time Passed: " + timertime;
    if (score==scoreMax){
        clearInterval(timerVar);
    }
}

function RandomQuote(){
    const randNum = Math.floor(Math.random() * sentences.length); //random sentence generated from array
    quoteDisplayElement.innerHTML = sentences[randNum]; //sets and displays current sentence generated from the array
    curr_quote = quoteDisplayElement.innerHTML; //sets current quote to the random generated quote
    wordTracker = wordTracker + quoteDisplayElement.innerHTML.split(" ").length;
}

function renderNewQuote(){
    RandomQuote();
    quoteDisplayElement.innerHTML = "";
    curr_quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = "";
}

function resetGame(){
    document.location.reload();
}

function gameOverPopup ()
{
    document.querySelector(".popup").style.display = "block"; 
    wpm = (wordTracker/5.0)/(timertime/60.0);
    wpmScoreDisplay.innerHTML = "Your WPM: " + wpm.toFixed(2);
    timeScoreDisplay.innerHTML = "You took " + timertime + " seconds to complete the game!";
    resetGameButton.classList.remove("hidden");
    quoteInputElement.classList.add("hidden");
}
