//Sliders
//Partners slider
const swiper = new Swiper(".partners__slider", {
  // Optional parameters
  breakpoints: {
    320: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 32,
      grabCursor: true,
    },
  },
});

//Courses slider
const slider = new Swiper(".courses__slider", {
  // Optional parameters
  breakpoints: {
    320: {
      centeredSlides: true,
      spaceBetween: 70,
      grabCursor: true,
    },
  },
});
