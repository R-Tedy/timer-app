const hoursView = document.getElementById('hours');
const minsView = document.getElementById('mins');
const secsView = document.getElementById('secs');
const stopIt = document.getElementById('stop');
const play = document.getElementById('play');
const restart = document.getElementById('restart')

let secs = 0;
let mins = 0;
let hours = 0;

let timer = null;

play.addEventListener('click',runWatch);
stopIt.addEventListener('click',stopTimer);
restart.addEventListener('click',restartTimer);


function  stopWatch(){
  let h = hours < 10 ? '0' + hours : hours;
  let m = mins < 10 ? '0' + mins : mins;
  let s = secs < 10 ? '0' + secs : secs;

  secs++;
  
  if (secs == 60) {
    secs = 0;
    mins++;
    if (mins == 60) {
      mins = 0;
      hours++;
    }
  }
  minsView.innerHTML = m;
  secsView.innerHTML = s;
  hoursView.innerHTML = h;
}

function runWatch() {
  if (timer != null) {
    clearInterval(timer)
  } else{
    timer = setInterval(stopWatch,1000)
  }
}

console.log(secs)

function stopTimer() {
  clearInterval(timer)
}

function restartTimer(){
  clearInterval(timer);
  hours = 0;
  mins = 0;
  secs = 0;
  minsView.innerHTML = '00';
  secsView.innerHTML = '00';
  hoursView.innerHTML = '00';
}