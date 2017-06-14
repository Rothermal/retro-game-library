/**
 * Created by Mark on 6/12/17.
 */
// import the schema
import Game from '../models/game';

// get all hte games sorted by postDate
const getGames = (req,res) => {
    // query the db, if no errors send all the games to the client
    Game.find(null, null, {sort:{postDate : 1} },(err, games) =>{
        if(err){
            res.send(err);
        }
        res.json(games); // games sent as json
    });
};

// get a single game and filter by id
const getGame = (req,res) => {
    const { id } = req.params;
    // query the db for a single game, if no errors send it to the client
    Game.findById(id, (err, game) => {
        if (err) {
            res.send(err);
        }
        res.json(game); // Game sent as json
    });

};
// get the data from the body and create a new Game
const postGame = (req,res) => {
    // we assign the game info to a empty game and send a message back if no errors
    let game = Object.assign(new Game(), req.body);
    // save it to the db
    game.save(err => {
        if (err){
            res.send(err);
        }
        res.json({message: 'Game Created'}); // simple json message returned to client
    });
};

// delete a game by id
const deleteGame = (req,res) =>{
    // we remove a game from the db by id, and send a message back if no errors
    Game.remove(
        {_id: req.params.id},
        err =>{
            if(err){
                res.send(err);
            }
            res.json({message: 'successfully deleted'}); // json answer to the client
        }
    );
};

// export the functions
export { getGames, getGame, postGame, deleteGame };