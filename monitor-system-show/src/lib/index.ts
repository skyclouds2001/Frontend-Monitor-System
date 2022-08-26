import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  result => result.data,
  error => Promise.reject(error),
);

export default instance;
