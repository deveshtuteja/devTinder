const express = require("express");
const connectDb = require("./config/database")
const User = require("./models/user")
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    //created a new instance of the User model
    const user = new User(req.body);
    try {
        await user.save();
        res.send("User added successfully!")
    } catch (err) {
        res.status(400).send("User cannot be added")
    }
})

connectDb().then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
        console.log("Server is listening on port 7777....");
    })
}).catch((err) => {
    console.error("Database cannot be connected");
})


