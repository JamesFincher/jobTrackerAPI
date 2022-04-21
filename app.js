const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());

//routes
const jobRoute = require("./routes/jobs");

//middleware
app.use("/", jobRoute);

//connect to mongoose
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to mongoose");
});

app.listen(9999);
