"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/chatbot.ts
const express_1 = __importDefault(require("express"));
const index_1 = require("../controllers/index");
const router = express_1.default.Router();
router.post('/message', index_1.ChatbotController.getResponse);
exports.default = router;
