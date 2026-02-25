import Tennis from "./tennis.js";

describe("Tennis", () => {
  it("deberia iniciar con love - love", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("love - love");
  });
});
