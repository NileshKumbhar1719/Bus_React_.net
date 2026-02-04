import axion from 'axios';

const API_URL = 'https://localhost:7020/api/Bus';

export const getBuses = async () => {
    try {   
        const response = await axion.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getBusById = async (busId) => {
    try {
        const response = await axion.get(`${API_URL}/${busId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
