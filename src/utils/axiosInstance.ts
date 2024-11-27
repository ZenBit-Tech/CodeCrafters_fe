import axios from 'axios';

import { logout } from '@/store/slices/authSlice';
import { store } from '@/store/store';
import { history } from '@/utils/history';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:4000',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.token;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logout());
      history.push('/');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
