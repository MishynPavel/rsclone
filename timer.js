"use strict";

/*таймер игры*/
function timer(elem, min, sec) {
  (--sec < 0) && (sec = min-- ? 59 : 0);
  min = Math.max(min, 0);
  elem.innerHTML = (2 - min) + " : " + (59 - sec);
  if (sec || min)
    setTimeout(timer.bind(0, elem, min, sec), 1000);
  else {
    alert('Время вышло!');
    location.href = "/rekord.html";
  }
}

timer(document.getElementById('play_timer'), 3, 0);

//Время из игры

function tick() {
  var nowTime = new Date();
  console.log('прошло секунд: ' + (nowTime + timer) / 1000);
}