import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getExampleData() {
    return apiClient.get('/example');
  }
};