const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { Connection } = require("./config/db");
const { projectRouter } = require("./routes/project.routes");
const { podcastRouter } = require("./routes/podcast.routes");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome To Zuru Backend");
});
app.use("/project", projectRouter);
app.use("/podcast", podcastRouter);
app.listen(process.env.port, async () => {
  try {
    await Connection;
    console.log(`Connected to server`);
  } catch (err) {
    console.log(err.message);
  }
  console.log(`Server running at ${process.env.port}`);
});
