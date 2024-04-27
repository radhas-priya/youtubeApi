// Load environment variables from .env file
require("dotenv").config();

const mongoose = require('mongoose');
const subscriberModel = require('./models/subscribers');
const data = require('./data');

// Connect to MongoDB using Mongoose and use DATABASE_URL from environment variables
mongoose.connect(process.env.DATABASE_URL, {
});

const connectDb = mongoose.connection;

// If any error occurs during connection,it will be  consoled and error will be dispalyed
connectDb.on("error", (err) => console.log(err));

// If the connection is successful, log a success message
connectDb.once("open", () => console.log("Database connected!"));

// Refresh all connections
const refreshAll = async () => {
    try {
      // Delete existing data
      await subscriberModel.deleteMany({});
      
      // Insert new data using create() method
      await subscriberModel.create(data);
      
      console.log("Data refreshed successfully!");
    } catch (error) {
      console.error("Error encountered while refreshing:", error);
    }
  };

module.exports = {
   connectDb,
  refreshAll
};
