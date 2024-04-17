// Processing when play or pause video
const playBtn = document.getElementById("playBtn");
const video = document.querySelector(".project__video");
playBtn.onclick = () => {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
  }
};

video.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
  }
});

video.addEventListener("ended", (e) => {
  playBtn.style.display = "flex";
  video.removeAttribute("controls");
});

// Processing add or remove actived navbar
const navbar = document.querySelectorAll(".navbar__link");
navbar.forEach((item) => {
  item.onclick = () => {
    const itemActived = document.querySelector(
      ".navbar__link.navbar__link--active"
    );
    itemActived.classList.remove("navbar__link--active");
    item.classList.add("navbar__link--active");
  };
});

// Processing add or remove actived navbar when click to logo
const logo = document.querySelector(".logo");
const home = document.getElementById("home");
logo.onclick = () => {
  const itemActived = document.querySelector(
    ".navbar__link.navbar__link--active"
  );
  itemActived.classList.remove("navbar__link--active");
  const home = document.getElementById("home");
  home.classList.add("navbar__link--active");
};

// Processing add or remove actived process__list
const processItem = document.querySelectorAll(".process__item");
processItem.forEach((item) => {
  item.addEventListener("mousemove", () => {
    const selectedItem = document.querySelector(".process__item--active");
    const img = document.querySelector(".process__item.process__img--active");
    img.classList.remove("process__img--active");
    selectedItem.classList.remove("process__item--active");
    item.classList.add("process__item--active");
    item.classList.add("process__img--active");
  });
});

// Processing add or remove actived share__list
const listItem = document.querySelectorAll(".list-item");
listItem.forEach((item) => {
  item.onclick = () => {
    const selectedItem = document.querySelector(".list-item--active");
    selectedItem.classList.remove("list-item--active");
    item.classList.add("list-item--active");
  };
});
