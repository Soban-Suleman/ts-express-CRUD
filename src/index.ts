// @IMPORTS
import { connectDb } from "./database/connection";
import Server from "./server";

Server.set("port", process.env.PORT);

Server.listen(Server.get("port"), () => {
  connectDb();
  console.log(`Application Running on Port ${Server.get("port")}`);
});
