import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

export class Firebase {
  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyDzOsDdwJ92JELqeU5S9Gcb-FQcmPGlHe0",
      authDomain: "web-ban-hang-95367.firebaseapp.com",
      projectId: "web-ban-hang-95367",
      storageBucket: "web-ban-hang-95367.appspot.com",
      messagingSenderId: "1016942462653",
      appId: "1:1016942462653:web:cab0d0b3c2dc778cccd9d4",
    };

    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);

    console.log("Firebase constructor");
  }

  async login(email, password) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email, password) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }
  async logout() {
    return await signOut(this.auth);
  }
}
