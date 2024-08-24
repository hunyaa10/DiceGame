const body = document.querySelector("body");

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
let totalScore = 0;

let isDisabled = true;
let i = 0;

const firstPlayer = () => {
  i = 0;

  const resetDice = () => {
    diceNumber[i].innerText = `주사위 숫자 : 0`;
    diceBuild[i].innerText = `주사위 합 : 0`;
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
    const dice = Math.floor(Math.random() * (6 - 1) + 1);
    diceNumber[i].innerText = `주사위 숫자 : ${dice}`;

    if (dice < 3) {
      diceBuild[i].innerText = `주사위 합 : ${dice}`;
      num = 0;
    } else {
      diceSum = num += dice;
      diceBuild[i].innerText = `주사위 합 : ${diceSum}`;
    }

    holdBtn.addEventListener("click", () => {
      totalScore = totalScore += diceSum;
      playerScore[i].innerText = `점수 : ${totalScore}`;
      diceSum = 0;

      ariaDisabled();
      resetDice();

      if (totalScore >= 30) {
        victory.style = "display: flex;";
        replay.addEventListener("click", () => {
          location.reload();
        });
      }
    });
  };
  playDice();
};
const secondPlayer = () => {
  i = 1;

  const resetDice = () => {
    diceNumber[i].innerText = `주사위 숫자 : 0`;
    diceBuild[i].innerText = `주사위 합 : 0`;
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
    const dice = Math.floor(Math.random() * (6 - 1) + 1);
    diceNumber[i].innerText = `주사위 숫자 : ${dice}`;

    if (dice < 3) {
      diceBuild[i].innerText = `주사위 합 : ${dice}`;
      num = 0;
    } else {
      diceSum = num += dice;
      diceBuild[i].innerText = `주사위 합 : ${diceSum}`;
    }

    holdBtn.addEventListener("click", () => {
      totalScore = totalScore += diceSum;
      playerScore[i].innerText = `점수 : ${totalScore}`;
      diceSum = 0;

      ariaDisabled();
      resetDice();

      if (totalScore >= 30) {
        victory.style = "display: flex;";
        replay.addEventListener("click", () => {
          location.reload();
        });
      }
    });
  };
  playDice();
};

playBtn[0].addEventListener("click", firstPlayer);
playBtn[1].addEventListener("click", secondPlayer);
