// @IMPORTS
import { connectDb } from "./database/connection";
import Server from "./server";

Server.set("port", process.env.PORT);

Server.listen(process.env.PORT, () => {
  connectDb();
  console.log("app Running");
});
