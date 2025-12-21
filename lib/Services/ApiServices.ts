import axios from 'axios';
import { ContactFormData } from '../validations/contactSchema';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://dbh-agency.com/api',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || "884e21c7e6a9fe23a9f0b2dfe63d96ddb3f390402012d72785422808deebd3be"
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
        const response = await apiClient.post('/contact', data);
        console.log('Contact Submission Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
};
