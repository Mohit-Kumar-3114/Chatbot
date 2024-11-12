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
// src/services/VultrService.ts
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class VultrService {
    constructor() {
        this.client = axios_1.default.create({
            baseURL: 'https://api.vultr.com/v2/',
            headers: {
                Authorization: `Bearer ${process.env.VULTR_API_KEY}`,
                Accept: 'application/json',
            },
        });
    }
    listInstances() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.get('instances');
                return response.data;
            }
            catch (error) {
                console.error("Error fetching instances:", error);
                throw error;
            }
        });
    }
}
exports.default = VultrService;
