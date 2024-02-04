const Movie = require('../models/Movie');
const getMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (err) {
        return next(err)
    }    
};

const getMovieById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        return res.status(200).json(movie);
    } catch (err) {
        return next(err)
    }
};

const getMovieByTitle = async (req, res, next) => {
    const { title } = req.params;
    try {
        const movie = await Movie.findOne({title: title});
        return res.status(200).json(movie);
    } catch (err) {
        return next(err)
    }
};

const getMoviesByGenre = async (req, res, next) => {
    const { genre } = req.params;
    try {
        const movies = await Movie.find({genre: genre})
        return res.status(200).json(movies);
    } catch (err) {
        return next(err)
    }
};

const getMoviesFrom2010 = async (req, res, next) => {
    try {
        const movies = await 
        Movie.find({age: {$gt: 2010} });
        return res.status(200).json(movies);
    } catch (err) {
        return next(err)
    }
};


module.exports = {
    getMovies, 
    getMovieById, 
    getMovieByTitle, 
    getMoviesByGenre, 
    getMoviesFrom2010
}