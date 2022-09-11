var mongoose = require('mongoose'),
    Game = require('../models/gameSchema'),
    Gamer = require('../models/gamerSchema');

//GET * Retorna un juego con un ID en especifico
exports.findId = async function(req, res){
    let gameId = req.params.gameId;

  Game.
    findById(gameId).
    populate('gamers').
    populate('winner').
    exec(async function (err, Game) {
      return await res.status(200).jsonp({
        id: Game._id,
        gamers: Game.gamers,
        inProgress: Game.inProgress,
        winner: {
            id: Game.winner._id,
            name: Game.winner.name
        }  
      });
    });
}

//POST * Asigne la apuesta de cada jugador.
exports.saveBet = async function(req, res) {
  let gameId = req.body.gameId;

  Game.
    findById(gameId).
    populate('gamers').
    populate('winner').
    exec(async function (err, _Game) {
      _Game.gamers.forEach(async function(gamer) {
        gamer.gamer_bet = gamer.rollDices();
        
        await gamer.save(function (err){
          if(err) return res.status(500).send(err.message);
        });
      });

      _Game.save(function (err){
        if(err) return res.status(500).send(err.message);
      });

      return res.send(_Game);
    });
}

//POST * Inserta un nuevo juego a la BD
exports.addGame = function (req, res){
  let { gamers, type, inProgress } = req.body;

  var game = new Game({
    type: type,
    inProgress: inProgress
  });

  for(let i = 0; i < gamers.length; i++){
    
    var gamer = new Gamer({
      name: gamers[i]
    });

    game.gamers[i] = gamer;
    gamer.save(gamer);
  }

  game.save(game);

  res.send(game);
}

//PUT * Actualiza un registro ya existente
exports.setWinner = function(req, res){
    let { id } = req.body;
  
    Game.findById(id).populate('gamers').exec(async function(err, Game) {
        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        
        if(!Game) return res.status(404).send({message: 'Juego no existe'});
        
        Game.winner = Game.selectWinner();
        Game.inProgress = false;
  
        Game.save(function (err){
          if(err) return res.status(500).send(err.message);
        });

        return res.send(Game);
    });
}

//GET * Retorna el ganador del juego.
exports.returnWinner = function(req, res){
  let gameId = req.params.gameId;

  Game.
    findById(gameId).
    populate('winner').
    exec(function(err, Game) {
      if(err){
        return res.status(500).send({message: `Error al realizar la petición ${err}`})
      }
      if(!Game){
        return res.status(404).send({message: 'Juego no existe'});
      }
      res.json({
        id: Game.winner._id,
        name: Game.winner.name
      });
    });
}

//GET * Retorna el ganador del juego.
exports.returnPlayers = async function(req, res){
  let gameId = req.params.gameId;

  await Game.
    findById(gameId).
    populate('gamers').
    exec(async function(err, Game) {
      if(err){
        return await res.status(500).send({message: `Error al realizar la petición ${err}`})
      }
      if(!Game){
        return await res.status(404).send({message: 'Juego no existe'});
      }
      
      await res.json(Game.gamers);
    });
}