"use strict";

/*Модальное окно на начало игры*/
var modal_g = document.getElementById('gameModal');
var game = document.getElementById("game");
var but = document.getElementsByClassName("close_g")[0];
game.onclick = function() {
  modal_g.style.display = "block";
}
but.onclick = function() {
  modal_g.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_g) {
    modal_g.style.display = "none";
  }
}

/*Модальное окно на выход из игры*/
var modal_e = document.getElementById('exitModal');
var exit = document.getElementById("exit");
var but = document.getElementsByClassName("close_e")[0];
exit.onclick = function() {
  modal_e.style.display = "block";
}
but.onclick = function() {
  modal_e.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_e) {
    modal_e.style.display = "none";
  }
}

/*Модальное окно на опции по звуку*/
var modal_o = document.getElementById('optiModal');
var muted = document.getElementById("options");
var sound = document.getElementsByClassName("close_o")[0];
options.onclick = function() {
  modal_o.style.display = "block";
}
sound.onclick = function() {
  modal_o.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_o) {
    modal_o.style.display = "none";
  }
}

/*смена текста на кнопке и включение/отключение*/
var audioClick = new Audio('Sound/cry.ogg');
document.querySelector('#muted').onclick = function() {
  if (!soundOn) {
    document.querySelector('#muted').innerHTML = 'Отключить звук'
    soundOn = true;
  } else {
    document.querySelector('#muted').innerHTML = 'Включить звук'
    soundOn = false;
  }
}

/*Модальное окно на информацию*/
var modal_i = document.getElementById('infoModal');
var info = document.getElementById("info");
var but = document.getElementsByClassName("close_i")[0];
info.onclick = function() {
  modal_i.style.display = "block";
}
but.onclick = function() {
  modal_i.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal_i) {
    modal_i.style.display = "none";
  }
}

