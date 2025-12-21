import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://dbh-agency.com/api',
    headers: {
        'Content-Type': 'application/json',
        API_KEY: "884e21c7e6a9fe23a9f0b2dfe63d96ddb3f390402012d72785422808deebd3be"
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
