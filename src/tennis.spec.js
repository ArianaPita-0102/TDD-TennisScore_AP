import Tennis from "./tennis.js";

describe("Tennis", () => {
  it("deberia iniciar con love - love", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("love - love");
  });

  it("deberia mostrar 15 si el primer jugador anota", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("15 - love");
  });

  it("deberia mostrar 30 si el primer jugador anota dos veces", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - love");
  });

  it("deberia mostrar 40 si el primer jugador anota tres veces", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("40 - love");
  });
});
