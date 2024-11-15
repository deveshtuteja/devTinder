const express = require("express");

const app = express();

// Request Handler

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
