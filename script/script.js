const blockMenu = document.querySelector('.header-menu-block');
const buttonMenu = document.querySelector('.header-menu');
const quizCards = document.querySelectorAll('.card-quiz-answer');
const calculatorCards = document.querySelectorAll('.card');

calculatorCards.forEach((card) => {
    card.addEventListener("click", (event) => {
	
		calculatorCards.forEach((removeClass) => {
			removeClass.classList.remove('active');
		});
	  card.classList.add('active')
    });
  });

buttonMenu.addEventListener('click', function(){
    blockMenu.classList.toggle('disabled');
    buttonMenu.classList.toggle('active-button-menu');
})


quizCards.forEach((card) => {
    card.addEventListener("click", (event) => {
	
		quizCards.forEach((removeClass) => {
			removeClass.classList.remove('active');
		});
	  card.classList.add('active')
    });
  });


let tab = function () {
    let tabNav = document.querySelectorAll('.accordeon-item'),
        tabContent = document.querySelectorAll('.accordeon-title'),
        tabName;
        
        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }

        function selectTabContent(tabName) {
            tabContent.forEach(item => {
                item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
            })
        }
}

tab();


