import mongoose from "mongoose";

const ReportsSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  startShift: {
    type: Date,
    required: true,
  },
  endShift: {
    type: Date,
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
 

  
});

// model related to the specific schema
export const ReportsModel = mongoose.model("Reports", ReportsSchema);
