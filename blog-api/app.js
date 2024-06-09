import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog-api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

export default app;
