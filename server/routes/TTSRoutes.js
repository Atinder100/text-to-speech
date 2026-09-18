import express from 'express';
import { getVoices } from '../controllers/VoicesController.js';

const router = express.Router();


router.get('/voices', getVoices);

export default router;