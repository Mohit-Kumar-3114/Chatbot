// src/services/VultrService.ts
import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class VultrService {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.vultr.com/v2/',
            headers: {
                Authorization: `Bearer ${process.env.VULTR_API_KEY}`,
                Accept: 'application/json',
            },
        });
    }

    async listInstances(): Promise<any> {
        try {
            const response = await this.client.get('instances');
            return response.data;
        } catch (error) {
            console.error("Error fetching instances:", error);
            throw error;
        }
    }
}

export default VultrService;
