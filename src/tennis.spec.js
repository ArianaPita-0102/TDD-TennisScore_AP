import score from "./tennis.js";

describe("Tennis", () => {
  it("deberia iniciar con love - love", () => {
    expect(score()).toEqual("love - love");
  });
});
