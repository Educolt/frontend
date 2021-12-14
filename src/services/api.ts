import axios from 'axios';

export const api = axios({
    baseURL: process.env.BASE_URL_API
});