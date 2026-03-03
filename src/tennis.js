class Tennis {
  constructor() {
    this.player1 = 0;
    this.player2 = 0;
  }
  player1Scores() {
    this.player1++;
  }
  player2Scores() {
    this.player2++;
  }
  score() {
    let player1Score = "love";
    let player2Score = "love";
    if (this.player1 == 1) {
      player1Score = "15";
    }
    if (this.player1 == 2) {
      player1Score = "30";
    }
    if (this.player1 == 3) {
      player1Score = "40";
    }
    if (this.player2 == 1) {
      player2Score = "15";
    }
    if (this.player2 == 2) {
      player2Score = "30";
    }

    if (this.player2 == 3) {
      player2Score = "40";
    }

    if (this.player1 == 4 && this.player2 == 0){
      return "Game for player 1"
    }
    return player1Score + " - " + player2Score;
  }
}

export default Tennis;
