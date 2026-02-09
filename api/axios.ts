import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const API = axios.create({
  baseURL: 'http://10.227.226.205:5000/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request Interceptor - Add Auth Token
API.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor - Handle Errors
API.interceptors.response.use(
  response => response,
  async error => {
    // Handle 401 Unauthorized - Clear token and redirect to login
    if (error.response?.status === 401) {
      try {
        await AsyncStorage.removeItem('token');
        // You can navigate to login screen here
      } catch (e) {
        console.error('Error clearing token:', e);
      }
    }

    // Log network errors
    if (!error.response) {
      console.error('Network Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default API;
