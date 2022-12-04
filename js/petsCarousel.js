const refs = {
  btnLeft: document.querySelector(".arrow__btn--left"),
  btnRight: document.querySelector(".arrow__btn--right"),
  list: document.querySelector(".pets__list"),
  items: document.querySelectorAll(".pets__item"),
};

refs.btnRight.addEventListener("click", onClick);
refs.btnLeft.addEventListener("click", onClick);

function onClick(e) {
  refs.btnLeft.disabled = true;
  refs.btnRight.disabled = true;

  setTimeout(() => {
    refs.btnLeft.disabled = false;
    refs.btnRight.disabled = false;
  }, 1000);

  for (let i = refs.list.children.length; i >= 0; i -= 1)
    refs.list.append(refs.list.children[(Math.random() * i) | 0]);

  if (e.currentTarget.className.includes("arrow__btn--left")) onLeftClick();
  if (e.currentTarget.className.includes("arrow__btn--right")) onRightClick();
}

function onLeftClick() {
  refs.items.forEach((item) => {
    item.classList.remove("from-left");
    item.classList.add("to-right");
  });
}

function onRightClick() {
  refs.items.forEach((item) => {
    item.classList.remove("to-right");
    item.classList.add("from-left");
  });
}
