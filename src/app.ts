import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes';
import { errorHandler } from './middleware/errorMiddleware';

const app = express();

app.use(express.json());
app.use('/api', movieRoutes);
app.use(errorHandler);

// Configuration
const PORT: number = parseInt(process.env.PORT!) || 3000;
const MONGODB_URI: string = 'mongodb://localhost:27017/movie_lobby_db';

// Database connection
mongoose.connect(MONGODB_URI, {
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  export default app;