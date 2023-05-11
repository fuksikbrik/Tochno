const popup1 = document.querySelector('#popup-1')
const popup2 = document.querySelector('#popup-2')
const popup3 = document.querySelector('#popup-3')
const popup4 = document.querySelector('#popup-4')
const popup5 = document.querySelector('#popup-5')

const popupWindow1 = document.querySelector('.popup-1')
const popupWindow2 = document.querySelector('.popup-2')
const popupWindow3 = document.querySelector('.popup-3')
const popupWindow4 = document.querySelector('.popup-4')
const popupWindow5 = document.querySelector('.popup-5')

const popupClose1 = document.querySelector('.popup-close-1')
const popupClose2 = document.querySelector('.popup-close-2')
const popupClose3 = document.querySelector('.popup-close-3')
const popupClose4 = document.querySelector('.popup-close-4')
const popupClose5 = document.querySelector('.popup-close-5')



const foggin = document.querySelector('.fogging')




popup1.addEventListener('click', function () {
    popupWindow1.classList.add('popup-active');
    foggin.classList.add('__active')
})
popupClose1.addEventListener('click', function (){
    popupWindow1.classList.remove('popup-active');
    foggin.classList.remove('__active')
})

popup2.addEventListener('click', function () {
    popupWindow2.classList.add('popup-active');
    foggin.classList.add('__active')
})
popupClose2.addEventListener('click', function (){
    popupWindow2.classList.remove('popup-active');
    foggin.classList.remove('__active')
})

popup3.addEventListener('click', function () {
    popupWindow3.classList.add('popup-active');
    foggin.classList.add('__active')
})
popupClose3.addEventListener('click', function (){
    popupWindow3.classList.remove('popup-active');
    foggin.classList.remove('__active')
})

popup4.addEventListener('click', function () {
    popupWindow4.classList.add('popup-active');
    foggin.classList.add('__active')
})
popupClose4.addEventListener('click', function (){
    popupWindow4.classList.remove('popup-active');
    foggin.classList.remove('__active')
})

popup5.addEventListener('click', function () {
    popupWindow5.classList.add('popup-active');
    foggin.classList.add('__active')
})
popupClose5.addEventListener('click', function (){
    popupWindow5.classList.remove('popup-active');
    foggin.classList.remove('__active')
})








const popupButtonComent1 = document.querySelector(".popup-coment-1")
const popupButtonComent2 = document.querySelector(".popup-coment-2")
const popupButtonComent3 = document.querySelector(".popup-coment-3")
const popupButtonComent4 = document.querySelector(".popup-coment-4")

const closeButtonComent1 = document.querySelector(".close-coment-1")
const closeButtonComent2 = document.querySelector(".close-coment-2")
const closeButtonComent3 = document.querySelector(".close-coment-3")
const closeButtonComent4 = document.querySelector(".close-coment-4")

const popupBlockComent1 = document.querySelector(".popup-coment-block-1")
const popupBlockComent2 = document.querySelector(".popup-coment-block-2")
const popupBlockComent3 = document.querySelector(".popup-coment-block-3")
const popupBlockComent4 = document.querySelector(".popup-coment-block-4")

popupButtonComent1.addEventListener("click", function () {
    popupBlockComent1.classList.add('popup-coment-active');
    foggin.classList.add('__active')
})
closeButtonComent1.addEventListener('click', function () {
    popupBlockComent1.classList.remove('popup-coment-active')
    foggin.classList.remove('__active')
})

popupButtonComent2.addEventListener("click", function () {
    popupBlockComent2.classList.add('popup-coment-active');
    foggin.classList.add('__active')
})
closeButtonComent2.addEventListener('click', function () {
    popupBlockComent2.classList.remove('popup-coment-active')
    foggin.classList.remove('__active')
})

popupButtonComent3.addEventListener("click", function () {
    popupBlockComent3.classList.add('popup-coment-active');
    foggin.classList.add('__active')
})
closeButtonComent3.addEventListener('click', function () {
    popupBlockComent3.classList.remove('popup-coment-active')
    foggin.classList.remove('__active')
})

popupButtonComent4.addEventListener("click", function () {
    popupBlockComent4.classList.add('popup-coment-active');
    foggin.classList.add('__active')
})
closeButtonComent4.addEventListener('click', function () {
    popupBlockComent4.classList.remove('popup-coment-active')
    foggin.classList.remove('__active')
})




const popupSlideVideo1 = document.querySelector('.popup-slide-video-1');
const popupSlideVideo2 = document.querySelector('.popup-slide-video-2');
const popupSlideVideo3 = document.querySelector('.popup-slide-video-3');
const popupSlideVideo4 = document.querySelector('.popup-slide-video-4');

const popupVideo1 = document.querySelector('.video-1');
const popupVideo2 = document.querySelector('.video-2');
const popupVideo3 = document.querySelector('.video-3');
const popupVideo4 = document.querySelector('.video-4');

const popupVideoClose1 = document.querySelector('.popup-video-close-1')
const popupVideoClose2 = document.querySelector('.popup-video-close-2')
const popupVideoClose3 = document.querySelector('.popup-video-close-3')
const popupVideoClose4 = document.querySelector('.popup-video-close-4')

popupSlideVideo1.addEventListener('click', function () {
    popupVideo1.classList.add('popup-video-active')
    foggin.classList.add('__active')
})
popupVideoClose1.addEventListener('click', function () {
    popupVideo1.classList.remove('popup-video-active')
    foggin.classList.remove('__active')
})

popupSlideVideo2.addEventListener('click', function () {
    popupVideo2.classList.add('popup-video-active')
    foggin.classList.add('__active')
})
popupVideoClose2.addEventListener('click', function () {
    popupVideo2.classList.remove('popup-video-active')
    foggin.classList.remove('__active')
})

popupSlideVideo3.addEventListener('click', function () {
    popupVideo3.classList.add('popup-video-active')
    foggin.classList.add('__active')
})
popupVideoClose3.addEventListener('click', function () {
    popupVideo3.classList.remove('popup-video-active')
    foggin.classList.remove('__active')
})

popupSlideVideo4.addEventListener('click', function () {
    popupVideo4.classList.add('popup-video-active')
    foggin.classList.add('__active')
})
popupVideoClose4.addEventListener('click', function () {
    popupVideo4.classList.remove('popup-video-active')
    foggin.classList.remove('__active')
})