const quoteDisplayElement = document.querySelector('#quoteDisplay');
const quoteInputElement = document.querySelector('#quoteInput');
const startGameButton = document.querySelector('#button');
const countdownDisplay = document.querySelector('#countdown');
const timerDisplay = document.querySelector("#timer");
const resetGameButton = document.querySelector('#reset');

var curr_input = "";
var curr_quote = "";
let countdowntime = 6;
let timertime = -6;
var score = 0;
const timerVar = "";
const countdownVar = "";

quoteInputElement.classList.add("hidden");//hides input box before game starts
timerDisplay.classList.add("hidden");

const sentences = [
    "I am what I am, an' I'm not ashamed.",
    "Time will not slow down when something unpleasant lies ahead.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "It does not do to dwell on dreams and forget to live",
];

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
        }
        if (score == 5){
            resetGameButton.classList.remove("hidden");
            quoteInputElement.classList.add("hidden");
        }
    });
}

function initializeGame(){
    startGameButton.classList.add("hidden");
    setInterval(countdown, 1000);
    setInterval(timer, 1000);
}

function countdown(){
  if (countdowntime > 0) { // Make sure time is not run out
    countdowntime--; // Decrement
    countdownDisplay.innerHTML = "Game Will Start In: " + countdowntime;
    setTimeout(functionToDisappearInnerHTML, 5000);
  }else if (countdowntime === 0) {
  countdownDisplay.classList.add("hidden");//adds countdown display
  }
}

function timer(){
    if (timertime >=0){
        quoteInputElement.classList.remove("hidden");
        timerDisplay.classList.remove("hidden");
    }
    timertime++;
    timerDisplay.innerHTML = "Time Passed: " + timertime;
}

function functionToDisappearInnerHTML() {
    countdownDisplay.innerHTML = ""; 
}

function RandomQuote(){
    const randNum = Math.floor(Math.random() * sentences.length); //random sentence generated from array
    quoteDisplayElement.innerHTML = sentences[randNum]; //sets and displays current sentence generated from the array
    curr_quote = quoteDisplayElement.innerHTML; //sets current quote to the random generated quote
}

function renderNewQuote(){
    RandomQuote();
    quoteDisplayElement.innerHTML = "";
    console.log(quoteDisplayElement)
    curr_quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = "";
}

// function resetGame(){
//     clearInterval(countdown);
//     clearInterval(timer);
//     curr_input = "";
//     curr_quote = "";
//     countdowntime = 6;
//     timertime = -6;
//     score = 0;
//     resetGameButton.classList.add("hidden");
//     timerDisplay.classList.add("hidden");
//     startGameButton.classList.remove("hidden");
//     quoteDisplayElement.innerHTML = NULL;
//     quoteInputElement.innerHTML = NULL;
// }
