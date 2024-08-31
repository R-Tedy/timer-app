const hoursView = document.getElementById('hours');
const minsView = document.getElementById('mins');
const secsView = document.getElementById('secs');
const stop = document.getElementById('stop');
const play = document.getElementById('play');
const restart = document.getElementById('restart')

let secs = 0;
let mins = 0;
let hours = 0;

play.addEventListener('click',stopWatch)

function  stopWatch(){
  if (secs < 60) {
    secs++;
    secsView.innerText = secs;
  } else if (secs = 60){
    secs = 0;
    mins++;
    minsView.innerText = mins;
    inter
  }
}