"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const topBtn = document.querySelector(".top-btn");
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

// Back to top
topBtn.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-circle-up"))
    home.scrollIntoView({ behavior: "smooth" });
});

const backTop = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) topBtn.classList.add("active");
  else topBtn.classList.remove("active");
};

const observer = new IntersectionObserver(backTop, {
  root: null,
  threshold: 0,
});
observer.observe(home);
