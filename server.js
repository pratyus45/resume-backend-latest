import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resumeRouter from './routes/resumeRoutes.js';
import aiRouter from './routes/aiRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
try {
    await connectDB();
} catch (error) {
    console.error("Failed to connect to database:", error.message);
    process.exit(1);
}

app.get('/', (req, res) => {
    res.send('Server is Live...');
});

// Routes
app.use('/api/users', userRouter);
app.use('/api/resumes', resumeRouter);
app.use('/api/ai', aiRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
