import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://192.168.1.72:8080/api',
    headers: {
        'Content-Type': 'application/json',
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
