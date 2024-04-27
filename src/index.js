require("dotenv").config();


const app = require("./app"); // Assuming your Express app is exported from app.js
const { connectDb, refreshAll }= require("./createDatabase");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

refreshAll();
