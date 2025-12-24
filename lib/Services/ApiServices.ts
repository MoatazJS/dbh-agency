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
