import express from 'express';
import { getVoices } from '../controllers/voicesController.js';
import { generateSpeech } from '../controllers/ttsController.js';

const router = express.Router();


router.get('/voices', getVoices);


router.post('/tts', generateSpeech);

export default router;