import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api/starships/',
  });
  export default axiosInstance;