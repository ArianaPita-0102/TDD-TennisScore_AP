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

  it("deberia mostrar love - 15 si el segundo jugador anota 1 vez", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("love - 15");
  });
  it("deberia mostrar love - 30 si el segundo jugador anota 2 veces", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("love - 30");
  });

  it("deberia mostrar love - 40 si el segundo jugador anota 3 veces", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("love - 40");
  });


  it("deberia mostrar Game for player 1 si el jugador 1 anota 4 veces y jugador 2 anota 0 veces", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Game for player 1");
  });

  it("deberia mostrar Game for player 2 si el jugador 2 anota 4 veces y jugador 1 anota 0 veces", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Game for player 2");
  });

  
  it("deberia mostrar Deuce si ambos jugadores anotaron 3 veces", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
  
    expect(tennis.score()).toEqual("Deuce");
  });


  it("Debería mostrar Advantage for player 1 si el juego estaba en Deuce y jugador 1 anota", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
  
    expect(tennis.score()).toEqual("Advantage for player 1");
  });


  it("Debería mostrar Advantage for player 2 si el juego estaba en Deuce y jugador 2 anota", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
  
    expect(tennis.score()).toEqual("Advantage for player 2");
  });

  it("Debería mostrar Game for player 1 si el jugador 1 anota 2 veces seguidas luego de Deuce", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
  
    expect(tennis.score()).toEqual("Game for player 1");
  });


  it("Debería mostrar Game for player 2 si el jugador 2 anota 2 veces seguidas luego de Deuce", () => {
    let tennis = new Tennis();

    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();

    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
  
    expect(tennis.score()).toEqual("Game for player 2");
  });
});
