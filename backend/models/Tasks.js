import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  assignedTo: String, // User ID
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
  deadline: Date,
  createdBy: String, // Admin ID
}, { timestamps: true });

export default mongoose.model("Task", TaskSchema);
