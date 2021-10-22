// Burger menu
burgerBtnOpen.addEventListener("click", (ev) => {
  burgerMenu.classList.add("open");
  mobileHeader.classList.remove("shadow");
});
burgerBtnClose.addEventListener("click", (ev) => {
  burgerMenu.classList.remove("open");
  mobileHeader.classList.add("shadow");
});
window.addEventListener("load", (ev) => {
  burgerMenu.classList.add("transition");
});
