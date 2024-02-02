require('dotenv').config();
const express = require('express');

const connectDB = require('./utils/db.js');
connectDB();

const movieRoutes = require('./api/routes/movies.routes.js');

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/movies', movieRoutes);

server.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected Error');
});

server.listen(PORT, () => {
    console.log(`Server running in https://localhost:${PORT}`);
});