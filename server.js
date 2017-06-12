import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

// import models and routes
//import Game from './app/models/game';
//import{getGames,GetGame,postGame,deleteGame} from './app/routes/game';

const app = express();
const port = process.env.PORT || 3000;










app.listen(port);

console.log('listening on port', port );