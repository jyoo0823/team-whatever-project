window.addEventListener('load', initialize);

// global variables we're using in functions
// let is a keyword that says variable is prone to change (i.e. opposite of const)
let timer = 0; //timer that runs during the game
let countdown = 5; //initial countdown timer
let score = 0;
let isPlaying;
let cursorIndex = 0;

// these are DOM element is something like a DIV, HTML, BODY element on a page
const wordInput = document.querySelector('#input');
const currentWord = document.querySelector('#currentsentence');
const scoreDisplay = document.querySelector('#scoredisplay');
const timeDisplay = document.querySelector('#timedisplay'); //<--we need to make an HTML source for this
// const startGameButton = document.querySelector('#button') //<--we're gonna need to make a HTML source for this
// const message = document.querySelector('#message');
// const seconds = document.querySelector('seconds');

// array of words to use
const words = [ //CHANGE ALL words TO SENTENCES LATER WHEN WE EDIT 
  'hello world',
  'we are cool',
  ];

// initialize game
 function initialize()
{
  resetFroggo();
  showWord(words);
  const characters = currentWord.split(" ").map((char) => {
    const span = document.createElement("span");
    span.innerText = char;
    currentWord.appendChild(span);
    return span;
  })
  setInterval(checkStatus, 1000);
  setInterval(countdownTimer,1000);
  startGameButton.addEventListener('click',function(event))
  {
   event.preventDefault();
   startGameButton.className = 'hide'; //hides the game button that player clicks on to start game
   input.className = " ";
  }
  if (countdownTimer() == 0){ //checks that countdown is zero
      gameTimer(); //starts timer at end of countdown
  }
  wordInput.addEventListener('input', checkMatch);
  const keydown = ({key});
  if (cursorIndex > characters.length){
    statsGame();
  }
}

// choose random words from array
function showWord(words)
{
  const randNum = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randNum]; //sets and displays current sentence generated from the array
}

// check if the word inputted is equal to the current word
function checkMatch()
{
  if (cursorMove())
  {
    isPlaying = true;
    wordInput.value = ' ';
    score++;
    moveFroggo();
    return true;
  }
  else
  {
    isPlaying = false;
    return false;
  }
  scoreDisplay.innerHTML = score;
}

//countdown at the beginning of the game
function countdownTimer()
{
  if (countdown>0){
    countdown--;
  }
  timeDisplay.innerHTML = countdown;
}

function gameTimer() //starts the timer of the game
{
  setInterval(function()
  {
    timer+=1;
  },1000);//increments one second in timer every 1000ms which is one second
  timeDisplay.innerHTML = timer;
}

// check to see if the game is over
function checkStatus()
{
  if((!isPlaying) && (score === 5))
    message.innerHTML = 'Game Over :(';
}

//movement of the cursor across the sentence
function cursorMove()
{
  let cursorWord = characters[cursorIndex];
  cursorWord.classList.add("cursor"); //need to add cursor HTML source and CSS
  if (wordInput.value === cursorWord.innerHTML)
  {
    cursorWord.classList.remove("cursor");
    cursorWord.classList.add("done");
    cursorWord = characters[++cursorIndex];
    return true;
  }
}

//calculates the stats of the game
function statsGame(){
  wpm = (characters.length/timer)*60.0 / 5.0; //more accurate calculation of wpm
  document.querySelector('#wpmdisplay').innerHTML = wpm;
  document.removeEventListener("keydown",keydown);
  startGameButton.className.remove('hide');
  return;
}


// reset position of frog at the start of the game
function resetFroggo()
{
    document.getElementById("froggo").style.top = '200px';
    document.getElementById("froggo").style.left = '0px'; 

}

// move the frog up in increments
function moveFroggo()
{
   var obj = document.getElementById("froggo");
   var topVal = parseInt(obj.style.left, 10);
   obj.style.left = (topVal + 100) + "px";
}
