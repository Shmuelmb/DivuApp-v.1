import mongoose from "mongoose";

const ReportsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  userName: {
    type: String,
    required: true,
  },

  
});

// model related to the specific schema
export const ReportsModel = mongoose.model("Reports", ReportsSchema);
