"use strict";

// functions
let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);

let buildResult = (playingIcons) => {
  playingIcons.innerHTML = `
    <li class="playing-icons__item">
          <div class="icon ${userChoice[0].name}-icon user-choice">
            <img src="./imgs/icon-${userChoice[0].name}.svg" alt="" />
          </div>
          <h3>YOU PICKED</h3>
        </li>
        <li class="playing-icons__item">
          <div class="icon ${houseChoice.name}-icon waiting">
            <img src="./imgs/icon-${houseChoice.name}.svg" alt="" />
          </div>
          <h3>THE HOUSE PICKED</h3>
        </li>
        <li class="result hidden">
          <h1>${result}</h1>
          <button class="play-again">PLAY AGAIN</button>
        </li>`;
  //show reslut after 1.5s
  setTimeout(function () {
    scoreDom.textContent = score;
    remove(
      playingIcons.querySelector(".playing-icons__item:nth-child(2) div"),
      "waiting"
    );
    remove(playingIcons.querySelector(".result"), "hidden");
  }, 1500);
};

//dom elements

let rulesBtn = document.querySelector(".show-rules");

let closeRules = document.querySelector(".rules-modal__close");

let rulesContainer = document.querySelector(".container-rules-modal");

let choosingIcons = document.querySelector(".choosing-icons");

let playingIcons = document.querySelector(".playing-icons");

let scoreDom = document.querySelector(".score h2");

//variables
let score = localStorage.getItem("score");
let result;
let userChoice;
let options = [
  { name: "rock", beats: "scissors" },
  { name: "paper", beats: "rock" },
  { name: "scissors", beats: "paper" },
];
let houseChoice;

//main

if (!score) {
  score = 0;
}

scoreDom.textContent = score;

//event listners

rulesBtn.addEventListener("click", () => {
  remove(rulesContainer, "hidden");
});

closeRules.addEventListener("click", () => {
  add(rulesContainer, "hidden");
});

choosingIcons.addEventListener("click", (e) => {
  if (check(e.target.parentElement, "icon")) {
    houseChoice = options[Math.floor(Math.random() * options.length)];
    userChoice = options.filter((item) => {
      return item.name === e.target.parentElement.id;
    });

    if (houseChoice.beats === userChoice[0].name) {
      result = "YOU LOSE";
      score--;
    } else if (userChoice[0].beats === houseChoice.name) {
      result = "YOU WIN";
      score++;
    } else {
      result = "Draw";
    }
  }
  localStorage.setItem("score", score);

  add(choosingIcons, "hidden");
  remove(playingIcons, "hidden");
  buildResult(playingIcons);
});

playingIcons.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".play-again")) {
    remove(choosingIcons, "hidden");
    add(playingIcons, "hidden");
  }
});
