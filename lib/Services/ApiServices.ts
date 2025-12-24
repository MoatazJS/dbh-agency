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
        console.log('Projects Response:', response.data);
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
        console.log('Projects Response:', response.data);
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
        console.log('Projects Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
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
