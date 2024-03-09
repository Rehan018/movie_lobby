import mongoose from 'mongoose';
import dotenv from 'dotenv';
const MONGODB_URI: string = 'mongodb://localhost:27017/movie_lobby_db';
dotenv.config();

beforeAll(async () => {

  await mongoose.connect(MONGODB_URI, {

  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
