import express from "express";
const appbook = express.Router();

appbook.get("/", (req, res) =>{
    res.render("book");
})

appbook.get("/add", (req, res) =>{
    res.render("book_add");
})

export {appbook};