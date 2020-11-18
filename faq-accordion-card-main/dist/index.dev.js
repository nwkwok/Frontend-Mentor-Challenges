"use strict";

var question = document.getElementsByClassName('card-container-content-question');
var answer = document.getElementsByClassName('card-container-content-answer');
var arrow = document.getElementsByClassName('arrow');

var _loop = function _loop(i) {
  question[i].addEventListener('click', function () {
    question[i].classList.toggle('active');
    answer[i].classList.toggle('active');
    arrow[i].classList.toggle('active');
  });
};

for (var i = 0; i < question.length; i++) {
  _loop(i);
} // for (let i = 0; i<accordion.length; i++) {
//     accordion[i].addEventListener('click', () =>{
//         this.classList.toggle('active')
//     })
// }
// const button = document.getElementById('test');
// const arrow = document.querySelector('.arrow')
// const answer = document.querySelector('.card-container-content-answer')
// button.addEventListener('click', () => {
//     arrow.classList.toggle('active');
//     answer.classList.toggle('active');
// });