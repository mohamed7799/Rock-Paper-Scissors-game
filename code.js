"use strict";

// functions
let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) =>
  check(item, _class) ? remove(item, _class) : add(item, _class);

//dom elements

let rulesBtn = document.querySelector(".show-rules");

let closeRules = document.querySelector(".rules-modal__close");

let rulesContainer = document.querySelector(".container-rules-modal");

let choosingIcons = document.querySelector(".choosing-icons");

//variables

let userChoice;

let options = ["rock", "paper", "scissors"];

let houseChoice = options[Math.floor(Math.random() * options.length)];

//event listners

rulesBtn.addEventListener("click", () => {
  remove(rulesContainer, "hidden");
});

closeRules.addEventListener("click", () => {
  add(rulesContainer, "hidden");
});

choosingIcons.addEventListener("click", (e) => {
  if (check(e.target.parentElement, "icon")) {
    console.log(e.target.parentElement);
  }
});
