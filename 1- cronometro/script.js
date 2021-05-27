const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let temp = 1000;
let interval;

function chrometerStart() {
   interval = setInterval(() => { timer(); }, temp);
}
btnStart.addEventListener("click", chrometerStart)

function chrometerPause() {
   clearInterval(interval)
}
btnPause.addEventListener("click", chrometerPause)

   
function chrometerReset() {
   clearInterval(interval)
   let second = 0;
   let minutes = 0;
   let hours = 0;

   document.querySelector(".teste").innerText = "00:00:00"

}
btnReset.addEventListener("click", chrometerReset)


function timer() {
   seconds++

   if(seconds == 60) {
      seconds = 0;
      minutes++

      if(seconds == 60) {
         minutes = 0
         hours++
      }
   }


   let format = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
   document.querySelector(".teste").innerText = format
}