const {get} = require('express').Router();

//controller route
const {search} = require('../controller/anime-controller');

//GET: routes
get('/search',search);