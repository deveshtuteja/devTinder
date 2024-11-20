const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");
//handle auth MIDDLEWARE for all GET,POST.... Requests

app.use("/admin", adminAuth)

app.get("/admin/getUserData", (req, res) => {
    res.send("USER DATA FETCHED SUCCESSFULLY!")
})

app.get("/admin/deleteUser", (req, res) => {
    res.send("DATA DELETED SUCCESSFULLY!")
})

app.get("/user", userAuth, (req, res) => {
    res.send("User found")
})

app.listen(7777, () => {
    console.log("Server is listening on port 7777....");
})
