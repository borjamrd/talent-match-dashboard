import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection: any = {};
  try {
    if (connection?.isConnected){
      console.log('Connected successfully', connection)
      return;
    } 
    const db: any = await mongoose.connect(process.env.MONGO_URI ?? "");

    connection.isConnected = db.connections[0]?.readyState;
  } catch (error) {
    throw new Error("Connection error: " + error);
  }
};
