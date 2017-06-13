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