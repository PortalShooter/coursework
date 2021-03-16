// Swiper hero
const swiper = new Swiper('.swiper-container', {
    loop: true,
    simulateTouch: false,
    speed: 3000,
    autoplay: {
     delay: 8000,
   },
  },
  );

  const swiperBtn = new Swiper('.swiper-container__btn', {
    speed: 1000,
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination-2',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
  },
  );

  const swiperEditions = new Swiper('.swiper-container__editions', {
    speed: 1000,
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination-2',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
  },
  );

  const swiperProjects = new Swiper('.swiper-container__projects', {
    speed: 1000,
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    simulateTouch: false,
    navigation: {
      nextEl: '.swiper-button-next-projects',
      prevEl: '.swiper-button-prev-projects',
    },
  },
  );