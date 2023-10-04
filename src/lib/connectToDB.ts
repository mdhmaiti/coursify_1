
import mongoose ,{ ConnectOptions } from 'mongoose';

export const connectToDB = async () => {
  
  try {
    await mongoose.connect(process.env.MONGODB_URL!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }as ConnectOptions);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};