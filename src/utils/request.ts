/**
 * @file request
 * @description 封装 Axios 请求库
 * @module utils/request
 */

import axios from 'axios';

// Axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 60 // request timeout
});

// 请求拦截  设置统一 header
service.interceptors.request.use(
  (config) => {
    // const userToken = localStorage.getItem('userToken', userToken);
    // if (userToken) {
    //     config.headers['Authorization'] = userToken;
    // }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截  401 token过期处理
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;
