var ham = document.querySelector(".hamburger");
var nav = document.querySelector(".nav-nav");

ham.addEventListener("click", () => {
  ham.classList.toggle("ham-clicked");
  nav.classList.toggle("nav-active");
});
