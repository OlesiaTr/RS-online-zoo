const refs = {
  donationBar: document.querySelector(".donate-btm__list"),
  donations: document.querySelectorAll(".donate-btm__item"),
  btns: document.querySelectorAll(".donate-btm__btn"),
  input: document.getElementById("donate-btm__input"),
};

refs.donationBar.addEventListener("click", onActiveStateChange);
refs.input.addEventListener("input", onInputChange);
refs.donations.forEach((donation) =>
  donation.addEventListener("click", onAmountChange)
);

// The specified amount when clicking on the circle is written in the Another amount field.
function onAmountChange(e) {
  const amount = e.target.innerText;
  const amountToDonate = Number(amount.split``.slice(1, amount.length).join``);
  const newDot = e.target;

  refs.input.value = amountToDonate;
  if (!refs.input.value) return;

  newDot.classList.add("donate-btm__dot--active");
}

// When you click on the circle on top of the amount, it becomes highlighted, and the previous active circle becomes inactive.
function onActiveStateChange(e) {
  refs.btns.forEach((btn) => {
    if (btn !== e.target) {
      if (btn.classList.contains("donate-btm__dot--active"))
        btn.classList.remove("donate-btm__dot--active");
    }
  });
}

// If you enter a number in the Another amount field that matches one of the amounts in the Amount bar at the top, the corresponding circle should become highlighted.
function onInputChange(e) {
  const typedAmount = e.target.valueAsNumber;

  refs.btns.forEach((btn) => {
    const amount = btn.innerText;
    const amountToDonate = Number(
      amount.split``.slice(1, amount.length).join``
    );

    if (amountToDonate === typedAmount)
      btn.classList.add("donate-btm__dot--active");
    if (amountToDonate !== typedAmount)
      btn.classList.remove("donate-btm__dot--active");
  });
}
