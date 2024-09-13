import axios, { AxiosInstance } from 'axios';

export const musicApi: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROOT,
});
