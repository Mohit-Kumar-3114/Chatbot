// src/controllers/ChatbotController.ts
import { Request, Response } from 'express';
import VultrService from '../services/index';

const vultrService = new VultrService();

export class ChatbotController {
    static async getResponse(req: Request, res: Response): Promise<void> {
        const userMessage: string = req.body.message;
        let botReply = "Hello! How can I assist you?";

        if (userMessage.toLowerCase().includes("instances")) {
            try {
                const instances = await vultrService.listInstances();
                botReply = `You have ${instances.length} instances.`;
            } catch (error) {
                botReply = "Sorry, I couldn't fetch your instances.";
            }
        }

        res.json({ reply: botReply });
    }
}
