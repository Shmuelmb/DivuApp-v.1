//imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  getAllUsersController,
  addUserController,
  updateTodoController,
  deleteUserController,
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
app.get("/api/getAllUsers", getAllUsersController);
app.post("/api/users/addUser", addUserController);
app.put("/api/users/updateUser/:id", updateTodoController);
app.delete("/api/users/deleteUser/:id", deleteUserController);

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
