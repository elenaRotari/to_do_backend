import mongoose from "mongoose";

const tasksSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    done: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tasks", tasksSchema);
