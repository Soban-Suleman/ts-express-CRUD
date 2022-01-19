import express from "express";
import Middlewares from "./config/Middlewares";
import { connectDb } from "./database/connection";
import Routes from "./routes/routes";
import { config } from "dotenv";

// @DOTENV config
config();

// @PORT
const port: number = parseInt(process.env.PORT as string, 10);

export class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    Middlewares.init(this);
    Routes.init(this);
  }
}

export default new Server().app;
