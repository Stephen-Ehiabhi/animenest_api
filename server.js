const express = require("express");
const {listen} = express();


const PORT = process.env.PORT || 8888;

listen(PORT,(err)=>{
if (err) console.log(err);
console.log(`Server is running on ${PORT}`);
})