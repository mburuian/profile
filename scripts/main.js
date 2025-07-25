// main.js

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const top = section.getBoundingClientRect().top;
    const winHeight = window.innerHeight;
    if (top < winHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
  });
});
