"use strict";
// Buttons
const hamburger = document.querySelector(".hamburger");
const btnAbout = document.querySelector(".btn-1");
const topBtn = document.querySelector(".top-btn");
const tabBtn = document.querySelectorAll(".tab__operation-btn");

// Navigation
const navMenu = document.querySelector(".menu");
const progressBar = document.querySelector("#progress-bar");

// containers
const tabContainer = document.querySelector(".tab-container");
const cardContent = document.querySelectorAll(".card__content");
// Sections
const sections = document.querySelectorAll(".section");
const section = document.querySelector(".section");
const main = document.querySelector('#main')
const aboutSec = document.querySelector("#about");
const home = document.querySelector("#home");

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

// Progress Bar
const animateProgressBar = () => {
  let scrollDistance = -main.getBoundingClientRect().top;
  let value = Math.floor((scrollDistance/25));
  console.log(value);
  progressBar.style.width = value + "%";
};
window.addEventListener("scroll", animateProgressBar);

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

//Tabbed component Project section
tabContainer.addEventListener("click", function (e) {
  // Removing active class
  tabBtn.forEach((b) => b.classList.remove("btn-active"));
  cardContent.forEach((c) => c.classList.remove("card__content--activate"));
  // Activate tab button
  e.target.classList.add("btn-active");
  // Activate content
  document
    .querySelector(`.card__content--${e.target.dataset.tab}`)
    .classList.add("card__content--activate");
  console.log(cardContent);
});
