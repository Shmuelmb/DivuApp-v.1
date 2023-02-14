//imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  getAllUsersController,
  addUserController,
  updateUserController,
  deleteUserController,
  getOneUserController,
} from "./controllers/UserControllers.js";
dotenv.config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

//the initialising of the server itself
const app = express();

// middlewares for the server
app.use(express.json());
app.use(cors());
// app.use(express.static("client/build"));

mongoose.set("strictQuery", true);

//routes for users
app.get("/api/users/getAllUsers", getAllUsersController);
app.get("/api/users/getOneUser/:id", getOneUserController);
app.post("/api/users/addUser", addUserController);
app.put("/api/users/updateUser/:id", updateUserController);
app.delete("/api/users/deleteUser/:id", deleteUserController);

//routes for Reports
app.post("/api/reports/addReport", addUserController);


mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (info) => {
    app.listen(PORT, () => {
      console.log("info", info);
      console.log("i am listening");
    });
  }
);
