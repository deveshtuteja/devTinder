const express = require("express");
const connectDb = require("./config/database")

const app = express();

//first we should connect to DB & then server should listen

connectDb().then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
        console.log("Server is listening on port 7777....");
    })
}).catch((err) => {
    console.error("Database cannot be connected");
})


