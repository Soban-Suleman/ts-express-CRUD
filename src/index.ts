// @IMPORTS
import { connectDb } from "./database/connection";
import Server from "./server";

Server.set("port", process.env.PORT);

Server.listen(8000, () => {
  connectDb();
  console.log("app Running");
});
