"use strict";

var button = document.getElementById('test');
var arrow = document.querySelector('.arrow');
var answer = document.querySelector('.card-container-content-answer');
button.addEventListener('click', function () {
  arrow.classList.toggle('active');
  answer.classList.toggle('active');
});