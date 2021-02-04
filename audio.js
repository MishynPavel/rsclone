"use strict";

//Работа со звуком
var soundCry = new Audio('Sound/cry.wav');
var soundPerformed = new Audio('Sound/performed.wav');
var soundOn = true;

function soundCryOnClick() {
    if(soundOn){
      soundCry.play();
    } 
}

function soundPerformedOnClick() {
  if(soundOn){
    soundPerformed.play();
  }
}