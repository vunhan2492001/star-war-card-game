import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api/people',
  });
  export default axiosInstance;