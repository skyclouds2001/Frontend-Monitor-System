import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost',
  timeout: 5000,
})

instance.interceptors.request.use(function (config: AxiosRequestConfig) {
  return config;
}, function (error: any) {
  error.isWatch = false;
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response: AxiosResponse) {
  return response;
}, function (error: any) {
  error.isWatch = false;
  return Promise.reject(error);
});

export default instance
