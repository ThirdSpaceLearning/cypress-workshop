import axios from 'axios';

export const dummyJson = axios.create({
    baseURL: 'https://dummyjson.com',
});
