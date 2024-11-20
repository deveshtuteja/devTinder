const express = require("express");

const app = express();

//we cannot send multiple response to a server. Only one single response
//app.use("/user",rh1,[rh2,rh3],rh4,rh5)

app.get("/user", (req, res, next) => {
    console.log("1st route handler");
    //next function
    next();
}, (req, res, next) => {
    console.log("2nd route handler");
    next();
}, (req, res, next) => {
    console.log("3rd route handler");
    next();
}, (req, res, next) => {
    console.log("4th route handler");
    res.send("4th handled");
})

app.listen(7777, () => {
    console.log("Server is listening on port 7777....");
})
