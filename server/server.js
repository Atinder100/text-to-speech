import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'TTS Server is running smoothly!' });
});

app.listen(PORT, () => {
  console.log(`Server running in development mode on http://localhost:${PORT}`);
});