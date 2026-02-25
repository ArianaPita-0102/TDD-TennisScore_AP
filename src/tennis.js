class Tennis {
  constructor() {
    this.player1 = 0;
  }
  player1Scores() {
    this.player1++;
  }
  score() {
    let player1Score = "love";
    if (this.player1 == 1) {
      player1Score = "15";
    }
    if (this.player1 == 2) {
      player1Score = "30";
    }
    return player1Score + " - love";
  }
}

export default Tennis;
