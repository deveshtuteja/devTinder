const express = require("express");

const app = express();

// Request Handler
//Code starts matching routes from top
//Order of routes matter

//this will handle only GET calls to /user
//complex routing- /ab?c /a(bc)?d /ab+c /ab*cd or regex-< /a/ , /.fly$/
// use of ?, +, *, () in routes

app.get("/user/:userId/:name/:password", (req, res) => {
    // : -> dynamic routes returned through req.params
    // req.query
    console.log(req.params);
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
