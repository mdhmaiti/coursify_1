
// more robust 

import mongoose,{ ConnectOptions } from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) {
    console.error('Missing MongoDB URL in environment variables.');
    return;
  }

  if (isConnected) {
    console.log('MongoDB connection already established');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }as ConnectOptions);

    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      isConnected = false; // Reset the connection status
    });
    
    isConnected = true; // Set the connection status to true
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Failed to connect to MongoDB:', error);
  }
};

