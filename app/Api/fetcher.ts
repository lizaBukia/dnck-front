import { ApiClient } from './api';

export const fetcher = <T>(url: string): Promise<T> =>
  ApiClient.get(url).then((res) => {
    console.log(res.data, 'res data');
    return res.data;
  });