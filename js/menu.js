(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    backdrop: document.querySelector(".backdrop"),
    menu: document.querySelector(".header .mob-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.backdrop.addEventListener("click", hideModalWindowOnBlur);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.backdrop.classList.toggle("is-hidden");
  }

  function hideModalWindowOnBlur(e) {
    if (e.target === e.currentTarget) {
      toggleMenu();
    }
  }
})();
