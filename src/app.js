const express = require("express");

const app = express();

//GET-> /user => middleware chain => request handler

//middleware-> functions that are executed in the middle of methods
app.use("/", (req, res, next) => {
    console.log("/ route handler")
    next();
})
app.get("/user", (req, res, next) => {
    console.log("/user route handler 1");
    next();
}, (req, res, next) => {
    console.log("/user route handler 2");
    res.send("hi!")
})

app.listen(7777, () => {
    console.log("Server is listening on port 7777....");
})
