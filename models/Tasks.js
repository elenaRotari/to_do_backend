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

const Tasks = mongoose.model("Tasks", tasksSchema);
export default Tasks;

// const changeStream = Tasks.watch();
// changeStream.on("change", async (res, req, next) => {
//   if (next.operationType === "delete") {
//     console.log("A document has been deleted: ", next.documentKey._id);
//     res.status(201).send(await Tasks.findByIdAndDelete(req.params.id));
//   }
// });
