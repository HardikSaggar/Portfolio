"use strict";
// Buttons
const hamburger = document.querySelector(".hamburger");
const btnAbout = document.querySelector(".btn-1");
const topBtn = document.querySelector(".top-btn");
const tabBtn = document.querySelectorAll(".tab__operation-btn");
const slider = document.querySelector(".slider");

const ghostContainer = document.querySelector(".card-container");
const ghost = document.querySelector(".card");
const navMenu = document.querySelector(".menu");
const tabContainer = document.querySelector(".tab-container");
const cardContent = document.querySelectorAll(".card__content");
const progressBar = document.querySelector("#progress-bar");
const imgTargets = document.querySelectorAll("img[data-src");
// Sections
const sections = document.querySelectorAll(".section");
const aboutSec = document.querySelector("#about");
const home = document.querySelector("#home");
const main = document.querySelector(".main");





// Responsive Hamburger Menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Button to About section
btnAbout.addEventListener("click", function () {
  aboutSec.scrollIntoView({
    behavior: "smooth",
  });
});

// Back to top
topBtn.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-circle-up"))
    home.scrollIntoView({ behavior: "smooth" });
});

const backTop = (entries) => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) topBtn.classList.add("active");
  else topBtn.classList.remove("active");
};

const observer = new IntersectionObserver(backTop, {
  root: null,
  threshold: 0.2,
});
observer.observe(home);

// Revealing Sections

//Tabbed component Education section
tabContainer.addEventListener("click", function (e) {
  // e.target.preventDefault();

  // Removing active class
  cardContent.forEach((c) => c.classList.remove("card__content--activate"));
  tabBtn.forEach((b) => b.classList.remove("btn-active"));
  // Activate tab button
  e.target.classList.add("btn-active");

  // Activate content
  document
    .querySelector(`.card__content--${e.target.dataset.tab}`)
    .classList.add("card__content--activate");
});

// Progress Bar
window.addEventListener("scroll", () => {
  let scrollDistance = -main.getBoundingClientRect().top;
  let progressWidth = (scrollDistance / 150) * 5;
  let value = Math.floor(progressWidth);
  progressBar.style.width = value + "%";
});

// Lazy loading images

const loadingImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadingImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach((img) => imgObserver.observe(img));

// Ghost follow mouse
const mostX = 10;
const mostY = 10;

const ghostFollow = function (e) {
  // ghost.style.transition = "none";
  let x = e.offsetX;
  let y = e.offsetY;

  const { width, height } = ghostContainer.getBoundingClientRect();
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const rotationY = ((x - halfWidth) / halfWidth) * mostX;
  const rotationX = ((y - halfHeight) / halfHeight) * mostY;

  ghost.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
};

ghostContainer.addEventListener("mousemove", ghostFollow);

// Project button
function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);