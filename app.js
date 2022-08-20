const express = require('express'),
    body_parser = require('body-parser'),
    method_override = require('method-override'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    controllers = require('./controllers/game_controller');

const app = express(),
    statics = __dirname,
    router = express.Router();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(method_override());

app.use(morgan("dev"));
app.use(express.static(statics));
app.use('/static', express.static('./static'));

mongoose.connect("mongodb://localhost/gamesDB", function(err, res){
  if(err){
    console.log("ERROR: connecting to Database. " + err);
  }
  app.listen(8080, function(){
    console.log("Node server running on port 8080");
  });
});

app.set('view engine', 'pug');
app.use(router);

app.get('/', async (req, res) =>{

  res.render('index');
});

//API routes
router.route('/game/:gameId').get(controllers.findId);
router.route('/game/:gameId/winner').get(controllers.returnWinner);
router.route('/startGame').post(controllers.updateGame);
router.route('/createGame').post(controllers.addGame);