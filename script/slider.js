 const sliderFive = new Swiper('.slider-5', {
    slidesPerView: 3,
    spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next-5',
        prevEl: '.swiper-button-prev-5',
      }
  })

  const sliderFour = new Swiper('.slider-4', {
    slidesPerView: 3,
    spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next-4',
        prevEl: '.swiper-button-prev-4',
      }
  })

  const sliderThwo = new Swiper('.slider-2', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      }
  })
  const sliderOne = new Swiper('.slider-1', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
      navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
      },
      pagination: {
        el: '.swiper-pagination-1',
        type: 'bullets',
      },
  })
  const sliderSeven = new Swiper('.slider-7', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next-7',
      prevEl: '.swiper-button-prev-7',
    },
    pagination: {
      el: '.swiper-pagination-7',
      type: 'bullets',
    },
  })

  const sliderSix = new Swiper('.slider-6', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next-6',
      prevEl: '.swiper-button-prev-6',
    },
    pagination: {
      el: '.swiper-pagination-6',
      type: 'bullets',
    },
  })