const player = document.querySelectorAll(".player");
const playerScore = document.querySelectorAll(".player-score");
const diceNumber = document.querySelectorAll(".dice-number");
const diceBuild = document.querySelectorAll(".dice-build");
const playBtn = document.querySelectorAll(".play-btn");

const holdBtn = document.getElementById("hold-btn");

const victory = document.querySelector(".victory");
const replay = document.getElementById("replay");

let num = 0;
let diceSum = 0;
let totalScore = [0, 0]; // 플레이어의 총 점수를 개별적으로 관리
let isDisabled = true;
let currentPlayer = 0;

const resetDice = () => {
  diceNumber[currentPlayer].innerText = `주사위 숫자 : 0`;
  diceBuild[currentPlayer].innerText = `주사위 합 : 0`;
  num = 0;
  diceSum = 0;
};

const ariaDisabled = () => {
  const disabledStatus = (element, status) => {
    status ? element.setAttribute("aria-disabled", "false") : element.setAttribute("aria-disabled", "true");
  };

  isDisabled = !isDisabled;
  disabledStatus(player[0], isDisabled);
  disabledStatus(player[1], !isDisabled);
};

const playDice = () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceNumber[currentPlayer].innerText = `주사위 숫자 : ${dice}`;

  if (dice < 3) {
    diceBuild[currentPlayer].innerText = `주사위 합 : ${dice}`;
    num = 0;
  } else {
    diceSum = num += dice;
    diceBuild[currentPlayer].innerText = `주사위 합 : ${diceSum}`;
  }
};

const switchPlayer = () => {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  resetDice();
  ariaDisabled();
};

const handleHold = () => {
  totalScore[currentPlayer] += diceSum;
  playerScore[currentPlayer].innerText = `점수 : ${totalScore[currentPlayer]}`;
  diceSum = 0;

  if (totalScore[currentPlayer] >= 30) {
    victory.style.display = "flex";
    replay.onclick = () => {
      location.reload();
    };
  } else {
    switchPlayer();
  }
};

playBtn[0].addEventListener("click", () => {
  if (currentPlayer === 0) {
    playDice();
  }
});

playBtn[1].addEventListener("click", () => {
  if (currentPlayer === 1) {
    playDice();
  }
});

holdBtn.addEventListener("click", handleHold);
