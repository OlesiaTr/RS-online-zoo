const header = document.querySelector("header");
const sticky = header.offsetTop;

window.onscroll = fixedHeader;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
}
