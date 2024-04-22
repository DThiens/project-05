// Processing when play or pause video button
const playBtn = document.querySelector(".project__media__play-btn.btn");
const video = document.querySelector(".project__video");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

video.preload = "auto";
let timer;

playBtn.addEventListener("mouseenter", () => {
  playBtn.style.opacity = 1;
  clearTimeout(timer);
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

video.addEventListener("mousemove", (e) => {
  clearTimeout(timer);
  playBtn.style.opacity = 1;
  video.controls = true;
  let value = e.clientX;
  if (video.paused) {
    playBtn.style.opacity = 1;
  } else {
    timer = setTimeout(() => {
      if (value == e.clientX) {
        playBtn.style.opacity = 0;
      } else {
        playBtn.style.opacity = 1;
      }
    }, 3000);
  }
});

video.addEventListener("click", () => {
  playBtn.style.opacity = 1;
  if (video.paused) {
    playIcon.style.opacity = 0;
    pauseIcon.style.opacity = 1;
    playBtn.style.opacity = 0;
  } else {
    playBtn.style.opacity = 1;
    playIcon.style.opacity = 1;
    pauseIcon.style.opacity = 0;
  }
});

video.addEventListener("mouseleave", () => {
  playBtn.style.opacity = 0;
  video.controls = false;
});

video.addEventListener("ended", () => {
  playBtn.style.opacity = 1;
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

// Processing add or remove actived service__list
const serviceItem = document.querySelectorAll(".service-item");
serviceItem.forEach((item) => {
  const status = document.querySelector(".serivce-item--active");
  if (status == null) {
    item.onclick = () => {
      const selectedItem = document.querySelector(".serivce-item--active");
      if (selectedItem != null) {
        selectedItem.classList.remove("serivce-item--active");
      }
      item.classList.add("serivce-item--active");
    };
  }
});

// Processing add or remove actived share__list
const listItem = document.querySelectorAll(".list-item");
listItem.forEach((item) => {
  const status = document.querySelector(".list-item--active");
  if (status == null) {
    item.onclick = () => {
      const selectedItem = document.querySelector(".list-item--active");
      if (selectedItem != null) {
        selectedItem.classList.remove("list-item--active");
      }
      item.classList.add("list-item--active");
    };
  }
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
