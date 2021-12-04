window.addEventListener('load', initialize);

// global variables we're using in functions
// let is a keyword that says variable is prone to change (i.e. opposite of const)
let timer = 0; //timer that runs during the game
let countdown = 5; //initial countdown timer
let score = 0;
let isPlaying;

// these are DOM element is something like a DIV, HTML, BODY element on a page
// const wordInput = document.querySelector('FILL IN THE BLANK');
// const currentWord = document.querySelector('FILL IN THE BLANK');
// const scoreDisplay = document.querySelector('FILL IN THE BLANK');
// const timeDisplay = document.querySelector('#time'); //<--we need to make an HTML source for this
// const scoreTimer = document.querySelector('FILL IN THE BLANK'); //<-- need to make an HTML source for this
// const startGameButton = document.querySelector('button') //<--we're gonna need to make a HTML source for this
// const message = document.querySelector('FILL IN THE BLANK');
// const seconds = document.querySelector('FILL IN THE BLANK');

// array of words to use
const words = [ //CHANGE ALL words TO SENTENCES LATER WHEN WE EDIT 
  'hello world',
  'we are cool',
  ];

// initialize game
 function initialize()
{
  showWord(words);
  wordInput.addEventListener('input', checkMatch);
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
}

// choose random words from array
function showWord(words)
{
  const randNum = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randNum];
}

// check if the word inputted is equal to the current word
function checkMatch()
{
  if (wordInput.value === currentWord.innerHTML)
  {
    isPlaying = true;
    showWords(words);
    wordInput.value = ' ';
    score++;
    return true;
  }
  else
    return false;
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

function gameTimer()
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
