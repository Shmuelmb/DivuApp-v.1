import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  AccessID: {
    type: Number,
    required: true,
  },
});

// model related to the specific schema
export const UserModel = mongoose.model("User", UserSchema);
