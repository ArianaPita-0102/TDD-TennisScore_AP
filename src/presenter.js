import Tennis from "./tennis.js";

const player1Input = document.querySelector("#player1");
const player2Input = document.querySelector("#player2");
const scorePlayer1Span = document.querySelector("#score-player1");
const scorePlayer2Span = document.querySelector("#score-player2");

const resultadoDiv = document.querySelector("#resultado-div");

const form = document.querySelector("#marcador-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const puntosPlayer1 = Number.parseInt(player1Input.value);
  const puntosPlayer2 = Number.parseInt(player2Input.value);

  const game = new Tennis();

  for (let i = 0; i < puntosPlayer1; i++) {
    game.player1Scores();
  }

  for (let i = 0; i < puntosPlayer2; i++) {
    game.player2Scores();
  }

  scorePlayer1Span.textContent = puntosPlayer1;
  scorePlayer2Span.textContent = puntosPlayer2;

  resultadoDiv.textContent = game.score();
});