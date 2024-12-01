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

//get user by email from database
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try {
        const users = await User.find({ emailId: userEmail })
        if (users.length === 0) {
            res.status(404).send("User not found")
        } else {
            res.send(users);
        }
    } catch (err) {
        res.status(400).send("Smthng went wrong")
    }
})

//FEED API-> get all users from the db
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length === 0) {
            res.status(404).send("User not found")
        } else {
            res.send(users);
        }
    } catch (error) {
        res.status(400).send("Smthng went wrong")
    }

})

//deleting a user from the database
app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete(userId)
        res.send("User deleted successfully")
    } catch (err) {
        res.status(400).send("Something went wrong");
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


