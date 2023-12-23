import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  onValue,
  update,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://champions-67439-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementData = ref(database, "user");

const publishBtn = document.getElementById("publish");
const textInput = document.getElementById("input");

// add event on button click
publishBtn.addEventListener("click", function () {
  let userInput = textInput.value;
  console.log(userInput);
});
