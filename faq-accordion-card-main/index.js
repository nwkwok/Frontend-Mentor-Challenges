const button = document.getElementById('test');
const arrow = document.querySelector('.arrow')
const answer = document.querySelector('.card-container-content-answer')

button.addEventListener('click', () => {
    arrow.classList.toggle('active');
    answer.classList.toggle('active');
});
 