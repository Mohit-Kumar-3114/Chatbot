// src/routes/chatbot.ts
import express from 'express';
import { ChatbotController } from '../controllers/index';

const router = express.Router();

router.post('/message', ChatbotController.getResponse);

export default router;
