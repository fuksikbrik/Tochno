const menuButton = document.querySelector('.header-menu');
const menuBlock = document.querySelector('.header-menu-block');
const quizCards = document.querySelectorAll('.card-quiz-answer');



menuButton.addEventListener('click', function (){
    menuButton.classList.toggle('active-menu');
    menuBlock.classList.toggle('disabled')
    console.log('click')
    
});

quizCards.forEach((card) => {
    card.addEventListener("click", (event) => {
		quizCards.forEach((removeClass) => {
			removeClass.classList.remove('active');
		});
	  card.classList.add('active')
    });
  });

