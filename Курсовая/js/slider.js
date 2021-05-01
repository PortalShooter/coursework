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
    spaceBetween: 34,
    slidesPerView: 1,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination-1',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },
    breakpoints: {
      1025: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      321: {
        slidesPerView: 2,
      }
    }
  },
  );

  const swiperEditions = new Swiper('.swiper-container__editions', {
    speed: 1000,
    spaceBetween: 34,
    slidesPerView: 3,
    slidesPerGroup: 3,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination-1',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },
    breakpoints: {
      1025: {
        slidesPerView: 3,
      },
      789: {
        spaceBetween: 50,
      },
      321: {
        slidesPerView: 2,
      }
    }
  },
  );

  const swiperProjects = new Swiper('.swiper-container__projects', {
    speed: 1000,
    spaceBetween: 34,
    slidesPerView: 3,
    slidesPerGroup: 3,
    simulateTouch: false,
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },
    breakpoints: {
      1025: {
        slidesPerView: 3,
      },
      321: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      }
    }
  },
  );