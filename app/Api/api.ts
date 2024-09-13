import axios, { AxiosInstance } from 'axios';

export const musicApi: AxiosInstance = axios.create({
  url: 'https://back.dnck.ge',
});
