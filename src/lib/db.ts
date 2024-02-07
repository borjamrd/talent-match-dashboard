import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const client = new MongoClient(process.env.MONGO_URI ?? "");

export const connectToDB = async () => {
  const connection: any = {};
  try {
    if (connection?.isConnected) return;
    const db: any = await mongoose.connect(process.env.MONGO_URI ?? "");
    console.log("MongoDB connected successfully!");
    connection.isConnected = db?.connections[0]?.readyState;
  } catch (error) {
    throw new Error("Connection error: " + error);
  }
};
