import axios from 'axios';

const BACKEND_URL = 'http://localhost:3001';

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
  });

  return api;
};
