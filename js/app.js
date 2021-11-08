// Burger menu
burgerBtn.addEventListener("click", (ev) => {
  burgerMenu.classList.toggle("open");
  mobileHeader.classList.toggle("shadow");
  burgerBtn.classList.toggle("close");
});
window.addEventListener("load", (ev) => {
  burgerMenu.classList.add("transition");
});

// Video frame
$(document).on("click", ".js-videoPoster", function (e) {
  //отменяем стандартное действие button
  e.preventDefault();
  var poster = $(this);
  // ищем родителя ближайшего по классу
  var wrapper = poster.closest(".js-videoWrapper");
  videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
  var iframe = wrapper.find(".js-videoIframe");
  // Берем ссылку видео из data
  var src = iframe.data("src");
  // скрываем постер
  wrapper.addClass("videoWrapperActive");
  // подставляем в src параметр из data
  iframe.attr("src", src);
}

//Popup
let openPopup = document.querySelectorAll(".open-popup");
openPopup.forEach(function (popupItem) {
  popupItem.onclick = () => callbackPopup.classList.add("popup-window_active");
});
closePopupBtn.onclick = () =>
  callbackPopup.classList.remove("popup-window_active");

//Copyright year
copyrightYear.textContent = new Date().getFullYear();
