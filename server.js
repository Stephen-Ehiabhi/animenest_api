const express = require("express");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//import routes
const animeRoutes = require("./routes/anime");

app.use("/api/v1", animeRoutes);

//predefined port
const PORT = process.env.PORT || 8888;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on ${PORT}`);
});
