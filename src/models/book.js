import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookShema = new Schema({
    img: {type: String},
    title: String,
    author: {type: String, index: true},
    years: {typr: Number, index: true},
    description: String
});
const Book = mongoose.model("Book", BookShema);

export  {Book};