const refs = {
  list: document.querySelector(".testimonial__list"),
  input: document.querySelector("input[type='range']"),
};

refs.input.addEventListener("input", onValueChange);

function onValueChange(e) {
  if (window.innerWidth <= 1020) refs.list.scrollLeft = 322 * e.target.value;
  if (window.innerWidth >= 1020) refs.list.scrollLeft = 306 * e.target.value;
}
