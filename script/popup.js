const popupTest = document.querySelector('#popup-test')

const popupWindow = document.querySelector('.popup')
const popupClose = document.querySelector('.popup-close')

popupTest.addEventListener('click', function () {
    popupWindow.classList.add('popup-active');
})
popupClose.addEventListener('click', function (){
    popupWindow.classList.remove('popup-active')
})
