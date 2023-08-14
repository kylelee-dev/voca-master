import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI as string);
    console.log(`DB connected: ${conn.connection.host}`);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default dbConnect;
