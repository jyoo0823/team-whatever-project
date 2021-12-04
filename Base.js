// global variables we're using in functions
// let is a keyword that says variable is prone to change (i.e. opposite of const)
let score = 0;
let isPlaying;

// these are DOM element is something like a DIV, HTML, BODY element on a page
// const wordInput = document.querySelector('FILL IN THE BLANK');
// const currentWord = document.querySelector('FILL IN THE BLANK')
// const scoreDisplay = document.querySelector('FILL IN THE BLANK');
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
  //scoreDisplay.innerHTML = score;
}


// check to see if the game is over
function checkStatus()
{
  if((!isPlaying) && (score === 5;))
    message.innerHTML = 'Game Over :(';
}

