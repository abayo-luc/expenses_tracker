import axios from 'axios';

const BASE_URL = 'https://expenses-tracker.herokuapp.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
