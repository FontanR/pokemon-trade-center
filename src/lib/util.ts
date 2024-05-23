'use server'
import mongoose from 'mongoose';

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDb = async (): Promise<void> => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_DB as string);
    connection.isConnected = db.connections[0].readyState;
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error(error instanceof Error ? error.message : 'Unknown error');
  }
};
