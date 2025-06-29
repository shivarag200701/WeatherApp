//file for creating mongoDB connection
const moongose = require("mongoose");
const { mongodb } = require("../config");

async function connectDB() {
  try {
    //connect to DB
    await moongose.connect(mongodb);
    console.log("Connected to DB");
  } catch (err) {
    console.error("Not able to connect to MongoDB", err.message);
  }
}

async function disconnectDB() {
  try {
    //disconnect DB
    await moongose.disconnect();
    console.log("disconnected");
  } catch (err) {
    console.error("Failed to disconnect", err.message);
    process.exit(1);
  }
}

module.exports = {
  connectDB,
  disconnectDB,
};
