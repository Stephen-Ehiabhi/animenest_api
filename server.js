const express = require("express");
const {listen,use} = express();

//import routes
const anime = require('./routes/anime');

use('/api/v1',anime)

const PORT = process.env.PORT || 8888;

listen(PORT,(err)=>{
if (err) console.log(err);
console.log(`Server is running on ${PORT}`);
})