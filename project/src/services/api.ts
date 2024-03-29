import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';

export const BACKEND_URL = 'https://10.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use((config : AxiosRequestConfig) => {
    const token = getToken();
    /* eslint-disable */
    if (token) {
      // @ts-ignore
      config.headers['x-token'] = token;
    }
    /* eslint-enable */
    return config;
  });
  return api;
};


