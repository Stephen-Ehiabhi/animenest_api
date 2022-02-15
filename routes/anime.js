const express = require("express");
const router = express.Router();

//controller route
const { search, singleAnime } = require("../controller/anime-controller");

//GET: search for an anime
router.get("/search/", search);
//GET: search for singleanime by name of anime

router.get("/single", singleAnime);

module.exports = router;
