const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GameSchema = new Schema({
  type: {
    type: String,
  },
  inProgress: {
    type: Boolean,
  },
  gamers: [
    {
      type: Schema.ObjectId,
      ref: 'Gamer',
    },
  ],
  winner: {
    type: Schema.ObjectId,
    ref: 'Gamer',
  },
});

GameSchema.methods.randomWinner = function (winner1, winner2) {
  let winners = [winner1, winner2];

  let i = Math.floor(Math.random() * 2);

  return winners[i];
};

GameSchema.methods.selectWinner = function () {
  let winner = this.gamers[0],
    selected_gamer,
    bet_gamer1 = 0,
    bet_gamer2 = 0;

  for (let i = 1; i < this.gamers.length; i++) {
    selected_gamer = this.gamers[i];

    bet_gamer1 = winner.gamer_bet;
    bet_gamer2 = this.gamers[i].gamer_bet;

    if (bet_gamer1 < bet_gamer2) {
      winner = selected_gamer;
    } else if (bet_gamer1 == bet_gamer2) {
      winner = this.randomWinner(winner, selected_gamer);
    }
  }

  return winner;
};

module.exports = mongoose.model('Game', GameSchema);
