const refs = {
  items: document.querySelectorAll(".testimonial__item"),
  body: document.querySelector("body"),
};

// The popup is opened by clicking on the review.
refs.items.forEach((item) => item.addEventListener("click", togglePopup));

function togglePopup(e) {
  if (window.innerWidth > 999) return;

  const clickedItem = e.target.closest(".testimonial__item");
  clickedItem.classList.add("backdrop--popup");
  refs.body.classList.add("no-scroll");

  const closeBtn = e.target.closest("[data-popup-close]");
  const toggleBackdrop = document.querySelector(".backdrop--popup");

  const closePopup = () => {
    refs.body.classList.remove("no-scroll");
    clickedItem.classList.remove("backdrop--popup");
  };

  // Clicking on the cross, or clicking on the shaded outer area closes the popup.
  if (closeBtn) closePopup();
  if (e.target === toggleBackdrop) closePopup();
}
