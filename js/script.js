const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountainsBehind = document.getElementById("mountains_behind");
const mountainsFront = document.getElementById("mountains_front");
const btn = document.getElementById("section__a_btn");
const text = document.getElementById("section__text");
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let valueY = window.scrollY;

  stars.style.left = valueY * 0.25 + "px";
  moon.style.top = valueY * 1.05 + "px";
  mountainsBehind.style.top = valueY * 0.5 + "px";
  mountainsFront.style.top = valueY * 0 + "px";
  text.style.marginRight = valueY * 4 + "px";
  text.style.marginTop = valueY * 1.5 + "px";
  btn.style.marginTop = valueY * 1.5 + "px";
  header.style.top = valueY * 0.5 + "px";
});
