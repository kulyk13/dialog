//Sliders

//Partners slider
const swiper = new Swiper(".partners__slider", {
  // Optional parameters
  breakpoints: {
    320: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 32,
    },
    576: {
      slidesPerView: 4,
      centeredSlides: true,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 6,
    },
  },
});

//Courses slider
const slides = ["A1", "A2", "B1", "B2", "C1"];
const values = [
  0,
  "начальный",
  "элементарный",
  "средний",
  "выше среднего",
  "продвинутый",
];
const slider = new Swiper(".courses__slider", {
  // Optional parameters
  breakpoints: {
    320: {
      draggable: true,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<li class="' +
            className +
            ' slider-pagination__item">' +
            slides[index++] +
            '<span class="slider-pagination__value"> &#160;-&#160;' +
            values[index++] +
            " уровень</span>" +
            "</li>"
          );
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 266,
      },
    },
    992: {
      spaceBetween: 100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<li class="' +
            className +
            ' slider-pagination__item">' +
            slides[index++] +
            '<span class="slider-pagination__value"> &#160;-&#160;' +
            values[index++] +
            " уровень</span>" +
            "</li>"
          );
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 266,
      },
    },
    1200: {
      spaceBetween: 170,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<li class="' +
            className +
            ' slider-pagination__item">' +
            slides[index++] +
            '<span class="slider-pagination__value"> &#160;-&#160;' +
            values[index++] +
            " уровень</span>" +
            "</li>"
          );
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 266,
      },
    },
  },
});

// Teachers slider
const teacherSlider = new Swiper(".teachers-slider", {
  // Optional parameters
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
    },
    768: {
      slidesPerView: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
    },
    992: {
      draggable: true,
      slidesPerView: 3,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});
