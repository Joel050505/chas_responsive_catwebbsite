const hamburger = document.querySelector(".fa-solid");

const navopen = document.querySelector(".navtext");
// const navcolor = document.querySelectorAll(".a");

hamburger.addEventListener("click", function () {
  navopen.classList.toggle("nav");
  //   navcolor.classList.toggle("colorWhite");
});
