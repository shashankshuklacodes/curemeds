import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
connectDB();

// Add your routes and middleware here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
