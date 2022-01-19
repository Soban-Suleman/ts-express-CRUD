import { config } from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import { IServer } from "../interface/serverInterface";
import exp from "constants";

export default class Middlewares {
  static init(server: IServer): void {
    server.app.use(cors());
    server.app.use(morgan("dev"));
    server.app.use(helmet());
    server.app.use(express.json({}));
    server.app.use(express.urlencoded({ extended: true }));
  }
}
