import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
var dotenv = require('dotenv').config();

// import models and routes
import Game from './app/models/game';
import{getGames,getGame,postGame,deleteGame} from './app/routes/game';

const app = express();
const port = process.env.PORT || 8080;

// db connection through mongoose
const options = {
  server:{socketOptions: {keepAlive:1,connectTimeoutMS:30000}},
  replset:{socketOptions: {keepAlive:1,connectTimeoutMS:30000}}
}; // options for db connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/retroGamingTutorial', options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

// middle ware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/client/dist'));

// enable cors so that we can make http request from webpack-dev-server
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
    next();
});

// routes
app.route('/games')
    // create a game
    .post(postGame)
    // get all the games
    .get(getGames);
app.route('/games/:id')
    // get a single game
    .get(getGame)
    // delete a single game
    .delete(deleteGame);

// catch all route. go back to homepage.

app.route("*").get((req,res) => {
   res.sendFile('client/dist/index.html', {root: __dirname});
});




app.listen(port);

console.log('listening on port', port );