//import sumar from "./sumador.js";

describe("Tennis", () => {
  it("deberia iniciar con love - love", () => {
    expect(score()).toEqual("love - love");
  });
});

function score() {
  return "love - love";
}
