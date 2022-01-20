import { Model, model, Schema } from "mongoose";

interface Todo {
  todo: string;
  completed: boolean;
  due: Date;
}

const TodoSchema: Schema = new Schema(
  {
    todo: String,
    due: { type: Date, default: new Date() },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todos: Model<Todo> = model("Todo", TodoSchema);
export default Todos;
