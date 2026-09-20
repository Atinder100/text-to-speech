import express from 'express';
import { getVoices } from '../controllers/voicesController.js';

const router = express.Router();

router.get('/voices', getVoices);

export default router;