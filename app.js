const express = require("express");
const app = express();

//Middleware qui permet de traiter les donnees de la requete
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

module.exports = app;
