const startBtn = document.querySelector("#start");
const sameCard = document.querySelector(".sub-container");
const winnerLbl = document.querySelector("#winner-label");
startBtn.addEventListener("click", () => {
  const card = Math.round(Math.random() * 12);
  const elem = document.querySelector(`.lb-${card}`);

  sameCard.style.background = "cadetblue";
  elem.style.background = "red";
  winnerLbl.textContent = card;
});
