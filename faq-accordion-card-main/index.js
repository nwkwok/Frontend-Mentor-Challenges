const question = document.getElementsByClassName('card-container-content-question');
const answer = document.getElementsByClassName('card-container-content-answer')
const arrow = document.getElementsByClassName('arrow')

for (let i = 0; i<question.length; i++) {
question[i].addEventListener('click', () => {
    question[i].classList.toggle('active');
    answer[i].classList.toggle('active');
    arrow[i].classList.toggle('active');
})
}


// for (let i = 0; i<accordion.length; i++) {
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
 