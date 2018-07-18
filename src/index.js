import express from "express";
import "dotenv/config"
const {PORT, MONGO_URL} = process.env
import mongoose from "mongoose";
import path from "path"

const app = express();

//Mongoose 
mongoose.connect("mongodb://localhost/bookstore-n");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){
    console.log(`connecté à MongoDB !`);
});
app.get("/", (req, res) => {
    res.render("home")
});

//PUG
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Route
import {appbook} from "./routes/book"
app.use("/book", appbook )

app.listen(5000, () =>{
    console.log(`Le serveur ${PORT} tourne !`);
});