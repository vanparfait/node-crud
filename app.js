const express = require("express");

const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const app = express();

//connection a la db
connectDB();

//Middleware qui permet de traiter les donnees de la requete
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

module.exports = app;
