const express = require("express");

const app = express();

//error handling -> always use try catch

app.get("/getUserData", (req, res) => {
    try {
        //Connecting to DB and getting data logic
        throw new Error("abcdef")
        res.send("Data fetched successfully")
    } catch (err) {
        res.status(500).send("An error has occurred")
    }
})

app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Unexpected Error")
    }
})

app.listen(7777, () => {
    console.log("Server is listening on port 7777....");
})
