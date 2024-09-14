import axios, { AxiosInstance } from 'axios';

export const ApiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROOT,
});
