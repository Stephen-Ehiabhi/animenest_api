const {get} = require('express').Router();

//controller route
const {search} = require('../controller/anime-controller');


get('/search',search);