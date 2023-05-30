const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db/database");

const path = require("path");

const SuperherosRouter = require("./routes/superheros.router");
const { ErrorMiddleware } = require("./middleware/error.middleware");

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static("static"));

app.use("/api/superheros/", SuperherosRouter);
app.use(ErrorMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (e) {
    console.log(e);
  }
};

start();
