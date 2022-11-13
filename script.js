"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const shortTextContent = function (value, selector) {
  document.querySelector(selector).textContent = value;
};

const onClickOrEnter = () => {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    shortTextContent("⛔️ No number!", ".message");

    //when players win
  } else if (guess === secretNumber) {
    shortTextContent("🎉 Correct number!", ".message");
    shortTextContent(secretNumber, ".number");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      shortTextContent(highScore, ".highscore");
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      shortTextContent(
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!",
        ".message"
      );
      score--;
      shortTextContent(score, ".score");
    } else {
      shortTextContent("💥 You lost the game!", ".message");
      shortTextContent(0, ".score");
    }
  }
};

document.querySelector(".check").addEventListener("click", function () {
  onClickOrEnter();
});

document.querySelector(".guess").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    onClickOrEnter();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  shortTextContent("start guessing...", ".message");
  shortTextContent(score, ".score");
  shortTextContent("?", ".number");

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
