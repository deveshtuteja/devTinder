const express = require("express");

const app = express();

// Request Handler
//Code starts matching routes from top
//Order of routes matter

app.use("/hello/123", (req, res) => {
    res.send("ABRACADABRA")
})

app.use("/hello", (req, res) => {
    res.send("Hello Hello Hello!");
})

app.use("/test", (req, res) => {
    res.send("Testing from the server!");
})

app.use("/", (req, res) => {
    res.send("Hello from the server!");
})

app.listen(7777, () => {
    console.log("Server is listening on port 7777....");
})
