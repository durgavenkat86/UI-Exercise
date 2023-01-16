import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL: string = 'https://fakeapi.rest.com/';
const API_VERSION: string = 'v1';

export const apiService:AxiosInstance = axios.create({
  baseURL: `${BASE_URL}${API_VERSION}`,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
});

class Http {
   
  get<T = any, R = AxiosResponse<T>>(url: string, service: AxiosInstance=apiService): Promise<R> {
    return service.get<T, R>(url);
  }
  
  post<T = any, R = AxiosResponse<T>>(url: string, data: T, service: AxiosInstance=apiService): Promise<R> {
    return service.post<T, R>(url, data);
  }
  
  put<T = any, R = AxiosResponse<T>>(url: string, data: T, service: AxiosInstance=apiService): Promise<R> {
    return service.put<T, R>(url, data);
  }
  
  deleteRequest<T = any, R = AxiosResponse<T>>(url: string, data: T, service: AxiosInstance=apiService): Promise<R> {
    return service.delete<T, R>(url, {data: data});
  }
  
}

export const http = new Http();
