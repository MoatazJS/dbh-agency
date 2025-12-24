import axios from 'axios';
import { ContactFormData } from '../interfaces/interface';

const API_URL = "https://www.dbh-agency.com/api"
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
export const fetchHomeProjects = async () => {
    try {
        const response = await apiClient.get('/home');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};
// Project Details with ID Function call
export const fetchProjectWithId = async (id: number) => {
    try {
        const response = await apiClient.get(`/projects/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};
// All Projects for Work page api call.
export const fetchAllProjects = async () => {
    try {
        const response = await apiClient.get(`/work`);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};
// Brands for Home page api call.
export const fetchAllBrands = async () => {
    try {
        const response = await apiClient.get(`/clients`);
        console.log('Brands Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
    }
};
// Contact Form Api Call
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
