import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.controller";
/**
 * @class UserRouter
 */
export default class TodoRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.route("/").get(getAllTodos).post(createTodo);
    this.router.patch("/update/:id", updateTodo);
    this.router.delete("/delete/:id", deleteTodo);
  }
}
