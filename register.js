import { Firebase } from "./Pizza website/class/firebase.js";
import { debugError } from "./helpers.js";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const firebase = new Firebase();

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordConfirm");
const submitBtn = document.getElementById("submit-btn");
const emailHelp = document.getElementById("emailHelp");
const passwordHelp = document.getElementById("passwordHelp");
const passwordConfirmHelp = document.getElementById("passwordConfirmHelp");

emailInput.addEventListener("keyup", function (e) {
  console.log("pressing in email Input: ", e.target.value);
  if (!EMAIL_REGEX.test(e.target.value)) {
    submitBtn.disabled = true;
    emailInput.classList.add("is-invalid");
    emailHelp.innerHTML = `email không hợp lệ`;
    emailHelp.classList.add("text-danger");
  } else {
    console.log("email hợp lệ", e.target.value);
    submitBtn.disabled = false;
    emailInput.classList.remove("is-invalid");
    emailHelp.innerHTML = ``;
  }
});

passwordInput.addEventListener("keyup", function (e) {
  if (passwordInput.value === ``) {
    passwordInput.classList.add("is-invalid");
    passwordHelp.innerHTML = `vui lòng nhập mật khẩu`;
    passwordHelp.classList.add("text-danger");
  } else {
    passwordInput.classList.remove("is-invalid");
    passwordHelp.innerHTML = ``;
  }
});

passwordConfirmInput.addEventListener("keyup", function (e) {
  if (passwordConfirmInput.value === ``) {
    passwordConfirmInput.classList.add("is-invalid");
    passwordConfirmHelp.innerHTML = `vui lòng nhập mật khẩu`;
    passwordConfirmHelp.classList.add("text-danger");
  }
  if (!(passwordConfirmInput.value === passwordInput.value)) {
    passwordConfirmInput.classList.add("is-invalid");
    passwordConfirmHelp.innerHTML = `mật khẩu xác nhận không đúng`;
    passwordConfirmHelp.classList.add("text-danger");
  } else {
    passwordConfirmInput.classList.remove("is-invalid");
    passwordConfirmHelp.innerHTML = ``;
  }
});

async function handleRegister(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;
  try {
    const result = await firebase.register(email, password);

    console.log("user", result.user);
  } catch (error) {
    let msg = debugError(error);
    Swal.fire({
      title: msg,
      icon: "error",
    });
  }
}

document
  .getElementById("register-form")
  .addEventListener("submit", handleRegister);
