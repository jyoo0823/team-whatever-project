

const startGameBtn = document.getElementById("start-game");
let inputbox = document.getElementById("inputbox");
inputbox.classList.add("hidden");



const countdownDisplay = document.querySelector('#countdown');
let timerDisplay = document.getElementById("countup");
timerDisplay.classList.add("hidden");
let timerwordDisplay = document.getElementById("countupword");
timerwordDisplay.classList.add("hidden");




function startGame(){
  startGameBtn.classList.add("hidden");
  window.countdowntime = 6;
  window.timertime = -6;
   setInterval(countdown, 1000);
   setInterval(timer, 1000);

}

function functionToDisappearInnerHTML() {
    countdownDisplay.innerHTML = ""; 
}

function countdown() {
  // Make sure time is not run out
  if (countdowntime > 0) {
    // Decrement
    countdowntime--;
    countdownDisplay.innerHTML = countdowntime;
  setTimeout(functionToDisappearInnerHTML, 5000);
  } else if (countdowntime === 0) {
    // Game is over
  inputbox.classList.remove("hidden");
  return 0;
  }
  // Show time
}
function timer(){

if (timertime >=0){
  inputbox.classList.remove("hidden");
  timerDisplay.classList.remove("hidden");

}

    timertime++;
    timerDisplay.innerHTML = timertime;
  
}

function reset(){
    if(score==5){
    startGameBtn.classList.remove("hidden");
    }
}
