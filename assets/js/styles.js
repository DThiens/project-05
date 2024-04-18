// Processing when play or pause video button
const playBtn = document.getElementById("playBtn");
const video = document.querySelector(".project__video");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

playBtn.addEventListener("mouseenter", () => {
  playBtn.style.opacity = "1";
  playBtn.onclick = () => {
    if (video.paused) {
      playIcon.style.opacity = 0;
      pauseIcon.style.opacity = 1;
      video.play();
    } else {
      video.pause();
      playIcon.style.opacity = 1;
      pauseIcon.style.opacity = 0;
    }
  };
});

video.addEventListener("click", () => {
  if (video.paused) {
    playIcon.style.opacity = 0;
    pauseIcon.style.opacity = 1;
  } else {
    playIcon.style.opacity = 1;
    pauseIcon.style.opacity = 0;
  }
});

video.addEventListener("mouseenter", () => {
  playBtn.style.opacity = "1";
  video.controls = true;
});

video.addEventListener("mouseleave", () => {
  playBtn.style.opacity = "0";
  video.controls = false;
});

video.addEventListener("ended", () => {
  playBtn.style.opacity = "1";
  playIcon.style.opacity = 1;
  pauseIcon.style.opacity = "0";
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
  item.addEventListener("mouseenter", () => {
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

// Hide Navigation bar
const navTop = document.querySelector(".header-top.fixed");

navTop.addEventListener("mouseenter", (e) => {
  navTop.classList.add("header-top--active");
});

navTop.addEventListener("mouseleave", () => {
  navActived = document.querySelector(".header-top--active");
  if (navActived != null) {
    navActived.classList.remove("header-top--active");
  }
});
