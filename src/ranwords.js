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
const scoreScoreDisplay = document.querySelector('#score')

var playBGAudio = document.querySelector('#bgaudio');
playBGAudio.volume = 0.03;

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

quoteInputElement.classList.add("hidden"); //hides input box before game starts
timerDisplay.classList.add("hidden");
scoreScoreDisplay.classList.add("hidden");
scoreScoreDisplay.innerHTML = "Score: 0";

const sentences = [
    "Frogs have been proven to have roamed the Earth for more than 200 million years.",
    "The goliath frog of West Africa is the largest frog in the world.",
    "The Cuban tree toad is known to only grow to half an inch long.",
    "Frogs can live for more than 20 years in captivity.",
    "Toads are frogs that have warty and dry skin, as well as shorter hind legs.",
    "Frogs can jump more than 20 times their body length using their legs.",
    "The golden poison frog has bold colors as a defense mechanism to warn other predators of their poisonous skin.",
    "Through evolution, frogs like the Fort Randolph robber frog have evolved to have boldly colored skin due to their coexistence with poisonous frog species.",
    "Frogs dig burrows in the mud at the bottom of ponds or underground to hibernate.",
    "The wood frog can survive for weeks with 65 percent of its body frozen.",
    "The wood frog uses glucose in its blood to keep its vital organs warm and protect them from damage while its body freezes.",
    "Most frogs are freshwater frogs; however, there are some frogs that can live in almost completely salt water.",
    "Frogs have spectacular night vision and are sensitive to movements.",
    "Frogs were the first land animal to have vocal cords.",
    "Male frogs have vocal sacs which are pouches that fill with air and resonates sounds like a megaphone.",
    "When swallowing food, frogs pull their eyes down to the roof of their mouths to push their food down their throat.",
    "One gram of poison made by the skin of the golden poison dart frog is enough to kill 100,000 people.",
    "Every week frogs completely shed their skin and then usually eat it.",
    "A group of frogs is called an army unlike a group of birds which is called a flock.",
];

function ChooseGameMode() {
    playBGAudio.play();
    startGameButton.classList.add("hidden");
    startEasyMode.classList.remove("hidden");
    startMediumMode.classList.remove("hidden");
    startHardMode.classList.remove("hidden");
}

function ChooseGameEasy() {
    startEasyMode.classList.add("hidden");
    startMediumMode.classList.add("hidden");
    startHardMode.classList.add("hidden");
    scoreMax = levels.easy;
    startGame();
}

function ChooseGameMedium() {
    startEasyMode.classList.add("hidden");
    startMediumMode.classList.add("hidden");
    startHardMode.classList.add("hidden");
    scoreMax = levels.medium;
    startGame();
}

function ChooseGameHard() {
    startEasyMode.classList.add("hidden");
    startMediumMode.classList.add("hidden");
    startHardMode.classList.add("hidden");
    scoreMax = levels.hard;
    startGame();
}

function startGame() {
    initializeGame();
    renderNewQuote(); //first quote generated

    let current = true;
    document.addEventListener("input", () => {
        const arrayQuote = quoteDisplayElement.querySelectorAll('span');
        const arrayValue = quoteInputElement.value.split('');

        arrayQuote.forEach((characterSpan, index) => {
            const character = arrayValue[index]
            if (character == null) {
                characterSpan.classList.remove('good')
                characterSpan.classList.remove('bad')
                current = false;
            } else if (character === characterSpan.innerText) {
                characterSpan.classList.add('good')
                characterSpan.classList.remove('bad')
                current = true;
            } else {
                characterSpan.classList.remove('good')
                characterSpan.classList.add('bad')
                current = false;
            }
        })
        if (current === true) {
            score++;
            scoreScoreDisplay.innerHTML = "Score: " + score;
            if (score < scoreMax) {
                renderNewQuote();
            }
            playAudio.play();
        }
        if (score == scoreMax) {
            gameOverPopup();
            quoteDisplayElement.classList.add("hidden");
        }
    });
}

function initializeGame() {
    startGameButton.classList.add("hidden");
    countdownVar = setInterval(countdown, 1000);
    timerVar = setInterval(timer, 1000);
}

function countdown() {
    if (countdowntime > 0) { // Make sure time is not run out
        countdowntime--; // Decrement
        countdownDisplay.innerHTML = "Game Will Start In: " + countdowntime;
    } else if (countdowntime === 0) {
        countdownDisplay.classList.add("hidden"); //adds countdown display
        quoteInputElement.classList.remove("hidden");
        scoreScoreDisplay.classList.remove("hidden");
        clearInterval(countdownVar);
    }
}

function timer() {
    if (timertime >= 0) {
        timerDisplay.classList.remove("hidden");
    }
    timertime++;
    timerDisplay.innerHTML = "Time Passed: " + timertime;
    if (score == scoreMax) {
        clearInterval(timerVar);
    }
}

function RandomQuote() {
    const randNum = Math.floor(Math.random() * sentences.length);
    quoteDisplayElement.innerHTML = sentences[randNum]; //sets and displays current sentence generated from the array
    curr_quote = quoteDisplayElement.innerHTML;
    wordTracker = wordTracker + quoteDisplayElement.innerHTML.split("").length;
    console.log(wordTracker);
}

function renderNewQuote() {
    RandomQuote();
    quoteDisplayElement.innerHTML = "";
    curr_quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = "";
}

function resetGame() {
    document.location.reload();
}

function gameOverPopup() {
    document.querySelector(".popup").style.display = "block";
    wpm = (wordTracker / 5.0) / (timertime / 60.0);
    wpmScoreDisplay.innerHTML = "Your WPM: " + wpm.toFixed(2);
    timeScoreDisplay.innerHTML = "You took " + timertime + " seconds to complete the game!";
    resetGameButton.classList.remove("hidden");
    quoteInputElement.classList.add("hidden");
}
