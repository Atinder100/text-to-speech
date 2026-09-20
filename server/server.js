import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ttsRoutes from './routes/ttsRoutes.js';
import voiceRoutes from './routes/voiceRoutes.js';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api', ttsRoutes);
app.use('/api', voiceRoutes);


app.get('/health', (req, res) => res.status(200).send('OK'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});