const express = require('express'),
    body_parser = require('body-parser'),
    method_override = require('method-override'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    controllers = require('./controllers/game_controller'),
    PORT = process.env.PORT || 8080,
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://0.0.0.0/gamesDB';

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const app = express(),
      statics = __dirname,
      router = express.Router();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(method_override());

app.use(morgan("dev"));
app.use(express.static(statics));
app.use('/static', express.static('./static'));

mongoose.connect('mongodb+srv://root:root@cluster0.zioonxz.mongodb.net/?retryWrites=true&w=majority', function(err, res){
  if(err){
    console.log("ERROR: connecting to Database. " + err);
  }
  app.listen(PORT, function(){
    console.log(`Node server running on port ${PORT}`);
  });
});

app.set('view engine', 'pug');
app.use(router);

app.get('/home', async (req, res) =>{
  res.render('index');
});

app.get('/game/:id', async (req, res) =>{
  res.render('game', {});
});

//API routes
router.route('/api/return/:gameId').get(controllers.findId);
router.route('/gamers/:gameId').get(controllers.returnPlayers);
router.route('/game/:gameId/winner').get(controllers.returnWinner);
router.route('/api/game/setWinner').post(controllers.setWinner);
router.route('/createGame').post(controllers.addGame);
router.route('/api/game/saveBet').post(controllers.saveBet);