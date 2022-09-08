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
exports.saveBet = function(req, res) {
  let gameId = req.params.gameId;



  Game.
    findById(gameId).
    populate('gamers').
    populate('winner').
    exec(async function (err, Game) {

      Game.gamers.forEach(function(gamer) {
        gamer.gamer_bet = Game.rollDices();
      });

      return await res.status(200).jsonp({
        id: Game._id,
        gamers: Game.gamers,
        winner: {
            id: Game.winner._id,
            name: Game.winner.name
        }
      });
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
exports.updateGame = function(req, res){
    let { gamerBet, id, type } = req.body;

    var game = new Game({
      _id: id,
      type: type
    });
  
    for(let i = 0; i < gamerBet.length; i++){
      Gamer.findById(gamerBet[i].id).exec(function(err, Gamer) {
        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        
        if(!Gamer) return res.status(404).send({message: 'Jugador no existe'});
        
        Gamer._id = gamerBet[i].id
        Gamer.gamer_bet = gamerBet[i].gamer_bet;
        
        game.gamers.push(Gamer);
  
        Gamer.save(function (err){
          if(err) return res.status(500).send(err.message);
        });
      });
    }
  
    Game.findById(id).exec(async function(err, Game) {
        if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        
        if(!Game) return res.status(404).send({message: 'Juego no existe'});
        
        Game._id = game._id;
        Game.type = game.type;
        Game.gamers = game.gamers;
        Game.winner = Game.selectWinner();
  
        Game.save(function (err){
          if(err) return res.status(500).send(err.message);
          res.send("Juego actualizado.")
        });
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