window.addEventListener('load', initialize);

// global variables we're using in functions
// let is a keyword that says variable is prone to change (i.e. opposite of const)
let timer = 0;
let score = 0;
let isPlaying;

// these are DOM element is something like a DIV, HTML, BODY element on a page
// const wordInput = document.querySelector('FILL IN THE BLANK');
// const currentWord = document.querySelector('FILL IN THE BLANK');
// const scoreDisplay = document.querySelector('FILL IN THE BLANK');
// const scoreTimer = document.querySelector('FILL IN THE BLANK');
// const startGameButton = document.querySelector('button') //<--we're gonna need to make a HTML source for this
// const message = document.querySelector('FILL IN THE BLANK');
// const seconds = document.querySelector('FILL IN THE BLANK');

// array of words to use
const sentences = [
  'hello world',
  'we are cool',
  ];


// initialize game
 function initialize()
{
  showWord(words);
  wordInput.addEventListener('input', checkMatch);
  startGameButton.addEventListener('click',function(event))
  {
    event.preventDefault();
    startGameButton.className = 'hide'; //hides the game button that player clicks on to start game
    input.className = " ";
    input.focus(); //after player clicks on button, cursor is focused on input box
    gameTimer(); //starts timer at click of button
  }
  setInterval(checkStatus, 1000);
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

function gameTimer()
{
  setInterval(function()
  {
    timer+=1;
  },1000);//increments one second in timer every 1000ms which is one second
}


// check to see if the game is over
function checkStatus()
{
  if((!isPlaying) && (score === 5;))
    message.innerHTML = 'Game Over :(';
}
