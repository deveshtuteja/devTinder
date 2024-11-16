const express = require("express");

const app = express();

// Request Handler
//Code starts matching routes from top
//Order of routes matter

//this will handle only GET calls to /user
app.get("/user", (req, res) => {
    res.send({ firstName: "Devesh", lastName: "Tuteja" })
})

app.post("/user", (req, res) => {
    res.send("User posted successfully to DB")
})

app.delete("/user", (req, res) => {
    res.send("Deleted successfully!")
})

//this will handle all the http methods api call to /test
app.use("/test", (req, res) => {
    res.send("Testing from the server!");
})

app.listen(7777, () => {
    console.log("Server is listening on port 7777....");
})
