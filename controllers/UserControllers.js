import {
  getAllUsers,
  getOneUser, // צריך לטפל בזה
  addUser,
  deleteUser,
} from "../services/UserServices.js";
import { uesrsAllowedUpdates } from "../data/data.js";

export const getAllUsersController = async (req, res) => {
  try {
    const allUsers = await getAllUsers();

    res.status(200).send(allUsers);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};

export const addUserController = async (req, res) => {
  try {
    const userFullName = req.body.FullName;
    const userAccessID = req.body.AccessID;

    const newUser = await addUser(userFullName, userAccessID);
    res.status(200).send(newUser);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};
export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletetUser = await deleteUser(id);
    if (!deletetUser) {
      res.status(404).send({ message: "no such todo with the specified id" });
    }
    res.status(200).send(deletetUser);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};
export const getOneUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getOneUser(id);
    if (!user) {
      res.status(404).send({ message: "no such todo with the specified id" });
    }
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};

export const updateTodoController = async (req, res) => {
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    todosAllowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    res.status(400).send({ message: "Invalid updates" });
  }

  try {
    const { id } = req.params;
    const todo = await getOneTodo(id);
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
};
