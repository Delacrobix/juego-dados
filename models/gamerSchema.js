var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GamerSchema = new Schema({
    name: {
        type: String
    },
    gamer_bet: {
        type: Number,
    }
});

GamerSchema.methods.rollDices = function() {
    return (Math.floor(Math.random() * 7));
}

module.exports = mongoose.model('Gamer', GamerSchema);