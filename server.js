import express from "express"; // bring from node modules the server
import cors from "cors";
// import { dummyTools } from "./data/data.js";
import mongoose from "mongoose";
// import { todosAllowedUpdates } from "./data/data.js";
// import { allProductsFromData } from "./data/data.js";
import dotenv from "dotenv";

dotenv.config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

//DB_USER,DBUSER ETC...
console.log(PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME);
const app = express(); // calling node module with all server abilities into const

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", true);

//models
// new Schema for MongoDB
const TodoSchema = new mongoose.Schema({
  //id is creating alone in mongoose

  title: {
    //type is required at every field
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

// model related to specific schema
const Todos = mongoose.model("Todos", TodoSchema);

const ProductSchema = new mongoose.Schema({
  //id is creating alone in mongoose

  title: {
    //type is required at every field
    type: String,
    required: true,
  },

  isSpecialProduct: {
    type: Boolean,
  },

  ProductAmount: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  price: {
    //type is required at every field
    type: Number,
    required: true,
    default: 0,
  },

  description: {
    //type is required at every field
    type: String,
  },
  rating: {
    rate: { type: Number },
    count: { type: Number },
    //type is required at every field
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("Products", ProductSchema);

//routes

//get - fetch data from db
//post add an item to the db
//put - edit an item inside the db
//delete - to delete item from db

//build from path and a function that calling url to get the route
// app.get("/calculator", async (req, res) => {
//   res.send({ message: "Yesssssssss calculator server is working" });
// });

app.get("/api/products/getProducts", async (req, res) => {
  try {
    const allProducts = await Products.find({});
    res.status(200).send(allProducts);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
});

app.post("/api/products/postProducts", async (req, res) => {
  try {
    const items = await Products.insertMany(req.body);
    res.status(201).send({ items });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.delete("/api/todos/deleteProduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Products.findOneAndDelete({ _id: id });
    if (!deletedProduct) {
      res
        .status(404)
        .send({ message: "no such product with the specified id" });
    }
    res.status(200).send(deletedProduct);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
});

// app.post("/api/products/postProducts2", async (req, res) => {
//   try {
//     const title = req.body.ProductName;
//     const rating = req.body.productRating;
//     const id = req.body.ProductID;
//     const price = req.body.ProductPrice;
//     const image = req.body.ImageLink;
//     const description = req.body.Description;

//     const newProduct = new Products({
//       ProductName: title,
//       productRating: rating,
//       ProductID: id,
//       ProductPrice: price,
//       ImageLink: image,
//       Description: description,
//     });
//     await newProduct.save();
//     res.status(200).send(newProduct);
//   } catch (e) {
//     console.log(e);
//     res.status(500).send({ message: e });
//   }
// });

app.get("/api/todos/getTodos", async (req, res) => {
  try {
    const allTodos = await Todos.find({});
    res.status(200).send(allTodos);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
});

app.post("/api/todos/addTodo", async (req, res) => {
  try {
    const todoTitle = req.body.title;

    const newTodo = new Todos({ title: todoTitle });
    await newTodo.save();
    res.status(200).send(newTodo);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
});

//body  is the body of the request and you can access it

app.put("/api/todos/updateTodo/:id", async (req, res) => {
  const { id } = req.params;
  console.log({ id });

  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    todosAllowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    res.status(400).send({ message: "Invalid updates" });
  }

  try {
    const todo = await Todos.findOne({ _id: id });
    if (!todo) {
      res.status(404).send({ message: "todo does not exist" });
    }
    updates.forEach((update) => (todo[update] = req.body[update]));
    await todo.save();
    res.status(200).send(todo);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
});

app.delete("/api/todos/deleteTodo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todos.findOneAndDelete({ _id: id });
    if (!deletedTodo) {
      res.status(404).send({ message: "no such todo with the specified id" });
    }
    res.status(200).send(deletedTodo);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
});

//how to connect MangoDB cloud
//mongodb+srv://nati619:<9823346yh>@productsshop.xz4hgzd.mongodb.net/test

mongoose.connect(
  //   "mongodb+srv://nati619:9823346yh@productsshop.xz4hgzd.mongodb.net/test",

  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (info) => {
    app.listen(PORT, () => {
      console.log("info", info);
      console.log("i am listening !!!!!!!!!!!!!!!!!");
    });
  }
);

// coonect to MongooseDB database
// mongoose.connect("mongodb://127.0.0.1:27017/todosGoCodeOctober", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//listener at the botom which conclude
// listening function to fulfuill all requests by our path's
// app.listen(PORT, () => {
//   // abillity that help you listen to the selected port - 8000
//   console.log("Im listening on your Port");
// });
