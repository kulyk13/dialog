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
function findVideos() {
  let videos = document.querySelectorAll(".video");

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector(".video__link");
  let media = video.querySelector(".video__media");
  let button = video.querySelector(".video__button");
  let id = parseMediaURL(media);

  video.addEventListener("click", () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute("href");
  video.classList.add("video--enabled");
}

function parseMediaURL(media) {
  let regexp =
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");

  return iframe;
}

function generateURL(id) {
  let query = "?rel=0&showinfo=0&autoplay=1";

  return "https://www.youtube.com/embed/" + id + query;
}

findVideos();

//Popup
let openPopup = document.querySelectorAll(".js-open-popup");
openPopup.forEach(function (popupItem) {
  popupItem.onclick = () => callbackPopup.classList.add("popup-window_active");
});
closePopupBtn.onclick = () =>
  callbackPopup.classList.remove("popup-window_active");

//Copyright year
copyrightYear.textContent = new Date().getFullYear();
