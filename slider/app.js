const formBtn = document.querySelector(".form__btn");
const formInputs = document.querySelectorAll(".form__input");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const errorMsgs = document.querySelectorAll(".form__error");
  if (errorMsgs) errorMsgs.forEach((errorMsg) => errorMsg.remove());

  formInputs.forEach((formInput, i) => {
    const type = formInput.dataset.type;
    const result = validateForm(formInput.value, type);
    if (!result) {
      return;
    }
    const p = document.createElement("p");
    p.innerText = result;
    p.className = "form__error";
    formInput.parentNode.appendChild(p);
  });
});

function validateForm(value, type) {
  if (type === "firstName" || "secondName" || "email") {
    if (value === "") {
      return "This field is required";
    }
  } else if (type === "password") {
    console.log("Hello");
    const passwords = document.querySelectorAll(".password");
    if (passwords[0] !== passwords[1]) {
      return "password doesn't match";
    }
  }
}
