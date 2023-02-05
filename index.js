import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const { PORT } = process.env;
//the initialising of the server itself
const app = express();

// middlewares for the server
app.use(express.json());
app.use(cors());
app.use(express.static("client/build"));

mongoose.set("strictQuery", false);

app.get("*"),
  (req, res) => {
    res.sendFile(_dirname + "/client/build/index.html");
  };

app.listen(PORT, () => {
  console.log("i am listening on port " + PORT);
});
