import axios from 'axios';
import { ContactFormData } from '../validations/contactSchema';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.NEXT_PUBLIC_API_SECRET_KEY,
    },
});

export const fetchProjects = async () => {
    try {
        const response = await apiClient.get('/projects');
        console.log('Projects Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const submitContactForm = async (data: ContactFormData) => {
    try {
        const response = await axios.post('https://formspree.io/f/mojaykdb', data, {
            headers: {
                'Accept': 'application/json',
            }
        });
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
