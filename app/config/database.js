import mongoose from 'mongoose';
import config from './config.js';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(config.db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected to: ${connect.connection.host}` +
        '\n------------------------------------------'
    );
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
