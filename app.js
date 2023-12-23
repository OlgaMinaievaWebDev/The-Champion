import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://champions-67439-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementData = ref(database, "user");

const publishBtn = document.getElementById("publish");
const textInput = document.getElementById("input");
const endorsementList = document.getElementById("endorsements");

// add event on button click
publishBtn.addEventListener("click", function () {
  let userInput = textInput.value;

  //push data to DB
  push(endorsementData, userInput);

  clearData();
});

//fetch from DB
onValue(endorsementData, function (snapshot) {
  if (snapshot.exists()) {
    let itemArr = Object.entries(snapshot.val());

    clearEndorsement();

    for (let i = 0; i < itemArr.length; i++) {
      let currentItem = itemArr[i];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];
      addText(currentItem);
    }
  }
});

function clearEndorsement() {
  endorsementList.innerHTML = "";
}

//clear text area
function clearData() {
  textInput.value = "";
}

//add item
function addText(item) {
  let itemId = item[0];
  let itemValue = item[1];

  let li = document.createElement("li");

  li.textContent = itemValue;

  //remove on click
  li.addEventListener("click", function () {
    let itemInDB = ref(database, `user/${itemId}`);
    remove(itemInDB);
  });

  endorsementList.appendChild(li);
}
