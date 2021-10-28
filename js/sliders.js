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
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 100,
      grabCursor: true,
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
  },
});
