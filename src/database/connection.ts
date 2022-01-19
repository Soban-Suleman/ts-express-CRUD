import { connect, ConnectOptions } from "mongoose";
export const connectDb = async () => {
  try {
    const mongoURI: string = process.env.MONGO_URI;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options as ConnectOptions);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
