
const express = require("express");
const app = express();
const subscribersRoutes = require("./routes/subcriberRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mounting subscribersRoutes under the root path (/)
app.use("/", subscribersRoutes);

module.exports = app;
