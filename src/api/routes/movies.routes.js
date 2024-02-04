const express = require('express');
const router = express.Router();
const contMov = require('../controllers/movies.controller')

router.get('/', contMov.getMovies);
router.get('/:id', contMov.getMovieById);
router.get('/title/:title', contMov.getMovieByTitle);
router.get('/genre/:genre', contMov.getMoviesByGenre);
router.get('/year', contMov.getMoviesFrom2010);

module.exports = router;