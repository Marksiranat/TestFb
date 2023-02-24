import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
const app = createApp(App);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvLsG2ZeYQRaMftlstJT2RoDNnRitQukc",
  authDomain: "siranat8-mju342.firebaseapp.com",
  projectId: "siranat8-mju342",
  storageBucket: "siranat8-mju342.appspot.com",
  messagingSenderId: "661017108372",
  appId: "1:661017108372:web:c706d55b4f625af20db981",
  measurementId: "G-WN98YCLG87",
};

// Initialize Firebase
const initFirebase= initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);

app.use(router);

app.mount("#app");
