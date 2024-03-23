import mongoose from "mongoose";

// In next js we have to cache our mongodb connection
// because for every db query we have to make new connection in next js

const connection = {};

export async function connectDB() {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI);
    if (db.connection) console.log("Mongodb Connected Successfully!");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error.message);
  }
}
