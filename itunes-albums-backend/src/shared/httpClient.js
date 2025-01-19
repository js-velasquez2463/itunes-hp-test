import axios from 'axios';

const httpClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error?.response?.data || error.message);
  }
);

export default httpClient;
