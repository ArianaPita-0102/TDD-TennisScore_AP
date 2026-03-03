import Tennis from "./tennis.js";

const player1Input = document.querySelector("#player1");
const player2Input = document.querySelector("#player2");
const form = document.querySelector("#marcador-form");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const puntosPlayer1 = Number.parseInt(player1Input.value);
  const puntosPlayer2 = Number.parseInt(player2Input.value);

  const game = new Tennis();

  // Simular puntos del player 1
  for (let i = 0; i < puntosPlayer1; i++) {
    game.player1Scores();
  }

  // Simular puntos del player 2
  for (let i = 0; i < puntosPlayer2; i++) {
    game.player2Scores();
  }

  resultadoDiv.textContent = game.score();
});