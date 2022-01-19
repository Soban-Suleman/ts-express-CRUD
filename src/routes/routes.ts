import express from "express";
import { IServer } from "../interface/serverInterface";
import TodoRouter from "./todo.routes";

export default class Routes {
  static init(server: IServer): void {
    const router: express.Router = express.Router();
    server.app.use("/", router);
    server.app.get("/", (req: express.Request, res: express.Response) => {
      res.status(200).send("HEllo to typescript API");
    });
    server.app.use("/api/todo", new TodoRouter().router);
  }
}
