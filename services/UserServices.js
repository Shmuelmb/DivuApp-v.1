import { UserModel } from "../models/UserModel.js";

export const getAllUsers = () => {
  return UserModel.find({});
};

export const addUser = (userFullName, ID) => {
  const newUser = new UserModel({ FullName: userFullName, AccessID: ID });
  return newUser.save();
};

export const getOneUser = (id) => {
  return UserModel.findOne({ _id: id });
};

export const deleteUser = (id) => {
  return UserModel.findOneAndDelete({ _id: id });
};
