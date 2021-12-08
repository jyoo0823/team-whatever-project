//calling the elements of the HTML that correspond to those selectors
const sentenceDisplayElement = document.querySelector('#sentenceDisplay');
const sentenceInputElement = document.querySelector('#sentenceInput');

const startGameButton = document.querySelector('#button');
const startEasyMode = document.querySelector('#buttonEasy');
const startMediumMode = document.querySelector('#buttonMedium');
const startHardMode = document.querySelector('#buttonHard');

const countdownDisplay = document.querySelector('#countdown');
const timerDisplay = document.querySelector("#timer");
const resetGameButton = document.querySelector('#reset');

const scoreScoreDisplay = document.querySelector('#score');
const wpmScoreDisplay = document.querySelector('#wpmScore');
const timeScoreDisplay = document.querySelector('#timeScore');

const frog = document.querySelector("#frog");
const rock = document.querySelector("#rock");

const playAudio = document.querySelector('#audio');
var playBGAudio = document.querySelector('#bgaudio');
playBGAudio.volume = 0.03;//controlling volume output

var curr_input = "";
var curr_sentence = "";
var countdowntime = 6;
var timertime = -6;
var score = 0;
var timerVar = "";
var countdownVar = "";
var wpm = "";
var wordTracker = 0;

//initialization of the difficulty levels
const levels = {
    easy: 5,
    medium: 10,
    hard: 15
};

sentenceInputElement.classList.add("hidden"); //hides input box before game starts
timerDisplay.classList.add("hidden"); 
scoreScoreDisplay.classList.add("hidden");
scoreScoreDisplay.innerHTML = "Score: 0";

//array of frog facts
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
  "Wood frog can survive for weeks with 65 percent of its body frozen.",
  "The wood frog uses glucose in its blood to keep its vital organs warm and protect them from damage while its body freezes.",
  "Most frogs are freshwater frogs; however, there are some frogs that can live in almost complete salt water.",
  "Frogs have spectacular night vision and are sensitive to movements.",
  "Frogs were the first land animal to have vocal cords.",
  "Male frogs have vocal sacs which are pouches that fill with air and resonate sounds like a megaphone.",
  "When swallowing food, frogs pull their eyes down to the roof of their mouths to push their food down their throat.",
  "One gram of poison made by the skin of the golden poison dart frog is enough to kill 100,000 people.",
  "Every week frogs completely shed their skin and then usually eat it.",
  "A group of frogs is called an army unlike a group of birds which is called a flock.",
  "The waxy monkey frog produces wax from its neck that is used to prevent their skin from drying out.",
  "Most frogs only have an upper jaw full of teeth.",
  "In Indonesia, there is a frog that has no lungs and breathes entirely through its skin.",
  "Frogs do not drink water because they absorb it through their skin.",
  "Asian tree frogs lay their eggs in a tree that is above the water so that the tadpoles land in the water when they hatch.",
  "Frogs have almost a 180 degree field of vision due to the placement of their eyes.",
  "Shorter-legged frogs can not jump; instead, they can only crawl, hop, or walk.",
  "The world's tiniest frog is a Paedophryne amanuensis which is generally the size of a housefly.",
  "The goliath frog grows up to about 7.1 pounds and has an average life span of 15 years in the wild.",
  "The goliath frog moves during the night to get its food: fishes, crabs, baby turtles, small snakes, etc.",
  "Frogs are fond of the moist warm pavement that occurs after it rains.",
  "Toads do not have teeth like frogs and frogs don't have bumpy, dry skin like toads.",
  "A new layer of bone forms every year when a frog goes into hibernation.",
  "There are more than 4,700 species of frogs in the world.",
  "People who study amphibians and reptiles are called herpetologists.",
  "The greek word Herpeton, like in herpetologist, means something that crawls.",
  "You can tell if the frog is a female or a male based on the size of their ears.",
  "Male frogs croak in order to attract other female frogs.",
  "Frogs play a huge role in keeping the world's insect population regulated.",
  "A fungus called chytrid lives in the water and causes frogs to be unable to breathe or absorb water.",
  "The Isthmohyla rivularis tree frog is one of the rarest animals in the world and was most recently seen in 2007.",
];

function ChooseGameMode() { //displays the three buttons to choose difficult modes
    playBGAudio.play();
    startGameButton.classList.add("hidden");
    startEasyMode.classList.remove("hidden");
    startMediumMode.classList.remove("hidden");
    startHardMode.classList.remove("hidden");
}

function ChooseGameEasy() { //easy game mode where sentences continue till player reaches score=5
    startEasyMode.classList.add("hidden");
    startMediumMode.classList.add("hidden");
    startHardMode.classList.add("hidden");
    scoreMax = levels.easy;
    startGame();
}

function ChooseGameMedium() { //medium game mode where sentences continue till player reaches score=5
    startEasyMode.classList.add("hidden");
    startMediumMode.classList.add("hidden");
    startHardMode.classList.add("hidden");
    scoreMax = levels.medium;
    startGame();
}

function ChooseGameHard() { //hard game mode where sentences continue till player reaches score=5
    startEasyMode.classList.add("hidden");
    startMediumMode.classList.add("hidden");
    startHardMode.classList.add("hidden");
    scoreMax = levels.hard;
    startGame();
}

function startGame() { //function that runs the entire game
    document.querySelector("#container3").classList.add("hidden"); //gets rid of instruction box
    initializeGame();
    renderNewSentence(); //first sentence generated

    var current = true;
    document.addEventListener("input", () => {
        const arraySentence = sentenceDisplayElement.querySelectorAll('span'); //creates a span around each element of the sentence generated
        const arrayValue = sentenceInputElement.value.split(''); //splits each input by the element and saves it as an array

        arraySentence.forEach((characterSpan, index) => {
        //iterates through each span which corresponds to an index number and compares to the index it correlates to in arrayValue
            const character = arrayValue[index]
            if (character == null) { //player inputs nothing
                characterSpan.classList.remove('good')
                characterSpan.classList.remove('bad')
                current = false;
            } else if (character === characterSpan.innerText) { //player input characters correctly 
                characterSpan.classList.add('good')
                characterSpan.classList.remove('bad')
                current = true;
            } else { //player input incorrect character
                characterSpan.classList.remove('good')
                characterSpan.classList.add('bad')
                current = false;
            }
        })
        if (current === true && sentenceInputElement.value == curr_sentence) { 
        //when the last element was correctly inputted and player input equals sentence generated
            score++; //increments score
            jump(); //causes frog graphic to jump over rock
            scoreScoreDisplay.innerHTML = "Score: " + score; //display score
            if (score < scoreMax) {
                renderNewSentence(); //generates new sentence
            }
            playAudio.play();
        }
        if (score == scoreMax) { 
            gameOverPopup(); //displays stats with the play again button
            sentenceDisplayElement.classList.add("hidden"); //hides sentence display
        }
    });
}

function initializeGame() {
    startGameButton.classList.add("hidden");
    countdownVar = setInterval(countdown, 1000); //starts countdown and calls countdown function every 1000ms=1s
    timerVar = setInterval(timer, 1000); //starts timer and calls timer function every 1000ms=1s
}

function countdown() {
    if (countdowntime > 0) { // Make sure time is not run out
        countdowntime--; // Decrement
        countdownDisplay.innerHTML = "Game Will Start In: " + countdowntime;
    } else if (countdowntime === 0) {
        countdownDisplay.classList.add("hidden"); //adds countdown display
        sentenceInputElement.classList.remove("hidden");
        scoreScoreDisplay.classList.remove("hidden");
        clearInterval(countdownVar);//stops countdown function
    }
}

function timer() {
    if (timertime >= 0) {
        timerDisplay.classList.remove("hidden");
    }
    timertime++;
    timerDisplay.innerHTML = "Time Passed: " + timertime;
    if (score == scoreMax) {
        clearInterval(timerVar);//stops timer function at end of game
    }
}

function RandomSentence() {
    const randNum = Math.floor(Math.random() * sentences.length); //generates a random number based on length of our sentences array
    sentenceDisplayElement.innerHTML = sentences[randNum]; //sets and displays current sentence generated from the array
    curr_sentence = sentenceDisplayElement.innerHTML;
    wordTracker = wordTracker + sentenceDisplayElement.innerHTML.split("").length; //counts the number of elements in the sentence generated
}

function renderNewSentence() {
    RandomSentence(); //random sentence generator
    sentenceDisplayElement.innerHTML = "";
    curr_sentence.split('').forEach(character => { //splits the sentence generated into each element and creates a span around each element
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        sentenceDisplayElement.appendChild(characterSpan);
    })
    sentenceInputElement.value = "";
}

// reloads page to reset it
function resetGame() {
    document.location.reload(); //reloads the browser window
}

// display a popup when game is over
function gameOverPopup() {
    document.querySelector(".popup").style.display = "block";
    wpm = (wordTracker / 5.0) / (timertime / 60.0); //calculates words per minute
    wpmScoreDisplay.innerHTML = "Your WPM: " + wpm.toFixed(2);
    timeScoreDisplay.innerHTML = "You took " + timertime + " seconds to complete the game!";
    resetGameButton.classList.remove("hidden"); //displays reset button to reload page
    sentenceInputElement.classList.add("hidden");
}

// make the frog graphic jump when score increases
function jump(){
    if(frog.classList == "animate"){return}
    frog.classList.add("animate");
    rock.classList.add("rockAnimate");
    setTimeout(function(){
        frog.classList.remove("animate");
        rock.classList.remove("rockAnimate");
    },300);
}
