"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotController = void 0;
const index_1 = __importDefault(require("../services/index"));
const vultrService = new index_1.default();
class ChatbotController {
    static getResponse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userMessage = req.body.message;
            let botReply = "Hello! How can I assist you?";
            if (userMessage.toLowerCase().includes("instances")) {
                try {
                    const instances = yield vultrService.listInstances();
                    botReply = `You have ${instances.length} instances.`;
                }
                catch (error) {
                    botReply = "Sorry, I couldn't fetch your instances.";
                }
            }
            res.json({ reply: botReply });
        });
    }
}
exports.ChatbotController = ChatbotController;
