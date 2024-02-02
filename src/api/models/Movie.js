const moongose = require('mongoose');

const Schema = moongose.Schema;

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        director: {type: String, required: true}, 
        year: {type: Number, required: true}, 
        genre: {type: String, required: true},
    }, 
    {
        timestamps: true,
    }
);

const Movie = moongose.model('Movie', movieSchema, 'movie');
module.exports = Movie;