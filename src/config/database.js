const mongoose = require("mongoose");

const connectDb = async () => {
    //refers to cluster and / refers to database
    await mongoose.connect("mongodb+srv://deveshtuteja17:pawbFLGCRTwVbu7W@cluster0.oqypu.mongodb.net/devTinder")
}

module.exports = connectDb;

