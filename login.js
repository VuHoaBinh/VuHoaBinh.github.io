import { Firebase } from "./Pizza website/class/firebase.js";
import { debugError } from "./helpers.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
const firebase = new Firebase();
onAuthStateChanged(firebase.auth, (user) => {
  if (user) {
    console.log("da dang nhap thanh cong", user);
    window.location.href = "./index.html";
  } else {
    console.log("da dang nhap khong thanh cong");
    async function handleSubmit(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const result = await firebase.login(email, password);

        Swal.fire({
          title: "Đăng nhập thành công",
          icon: "success",
        });
        window.location.href = "./index.html";
      } catch (error) {
        let msg = debugError(error);
        Swal.fire({
          title: msg,
          icon: "error",
        });
      }
    }
    document
      .getElementById("login-form")
      .addEventListener("submit", handleSubmit);
  }
});
