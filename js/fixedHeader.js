const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const sticky = header.offsetTop;

window.onscroll = fixedHeader;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
    hero.classList.add("hero__fixed-header");
  } else {
    header.classList.remove("header--sticky");
    hero.classList.remove("hero__fixed-header");
  }
}
