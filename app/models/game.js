/**
 * Created by Mark on 6/12/17.
 */
// dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// the Schema

const gameSchema = new Schema(
    {
        name: String,
        year: Number,
        description: String,
        picture: String,
        postDate: {type: Date, default: Date.now} // timestamp

    }
);

export default mongoose.model('Game', gameSchema);