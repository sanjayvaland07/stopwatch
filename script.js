let [second, minute, hour] = [0, 0, 0];
const displaytime = document.querySelector("#time");
const displaLap = document.querySelector(".lap-time");
let count = 1;
let time;
let [s,m,h] = ['00','00','00'];


function timer() {
  second = second + 1;
  if (second === 60) {
    second = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }

  s = second < 10 ? "0" + second : second;
  m = minute < 10 ? "0" + minute : minute;
  h = hour < 10 ? "0" + hour : hour;

  displaytime.innerHTML = `${h} : ${m} : ${s}`;
}
const playbtn = document.querySelector("#play i");
function start() {
  if(playbtn.classList.contains("fa-play"))
  {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
    time = setInterval(timer, 1000);
  }
  else{
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
    clearInterval(time);
  }
}

function laptime() {
  // clearInterval(time);
  console.log(hour,minute,second);
  displaLap.innerHTML += `<div class='box'><h3>#${count++}   ${h}:${m}:${s}</h3></div>`;

}

function reset() {
  [second, minute, hour] = [0, 0, 0];
  displaytime.innerHTML = `00 : 00 : 00`;
}