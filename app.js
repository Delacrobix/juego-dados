const express = require('express');
const body_parser = require('body-parser');
const method_override = require('method-override');
const morgan = require('morgan');
const mongoose = require('mongoose');
const controllers = require('./controllers/game_controller');
const env_conf = require('dotenv');

env_conf.config({ path: '.env.local' });

const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB;

const app = express();
const statics = __dirname;
const router = express.Router();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(method_override());

app.use(morgan('dev'));
app.use(express.static(statics));
app.use('/static', express.static('./static'));

(async () => {
  try {
    await mongoose.connect(MONGODB);
    console.log('Connect to: ' + MONGODB);
  } catch (err) {
    console.log('ERROR: connecting to Database. ' + err);
    console.log(MONGODB);
  }

  app.listen(PORT, function () {
    console.log(`Node server running on port ${PORT}`);
  });
})();

app.set('view engine', 'pug');
app.use(router);

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/game/:id', async (req, res) => {
  res.render('game', {});
});

//API routes
router.route('/api/return/:gameId').get(controllers.findId);
router.route('/gamers/:gameId').get(controllers.returnPlayers);
router.route('/game/:gameId/winner').get(controllers.returnWinner);
router.route('/api/game/setWinner').post(controllers.setWinner);
router.route('/createGame').post(controllers.addGame);
router.route('/api/game/saveBet').post(controllers.saveBet);
