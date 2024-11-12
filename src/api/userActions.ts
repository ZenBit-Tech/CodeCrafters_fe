import { Dispatch } from '@reduxjs/toolkit';
import axiosInstance from '@/utils/axiosInstance';
import { toast } from 'react-toastify';
import { setAccessToken } from '@/store/slices/authSlice';
import axios from 'axios';

export const sendLoginLink = (email: string) => async (): Promise<boolean> => {
  try {
    const response = await axiosInstance.get(`/auth/${email}`);
    if (response.data.status) {
      toast.success(
        `Message successfully sent to ${email}, please check your email.`
      );
      return true;
    } else {
      toast.error('Failed to send the login link. Please try again later.');
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(`User with this email isn't exists. Please try again later.`);
    } else {
      toast.error('An unknown error occurred.');
    }
    return false;
  }
};

export const verifyToken =
  (accessToken: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await axiosInstance.get('/auth', {
        headers: {
          Authorization: `${accessToken}`,
        },
      });

      const { token, role } = response.data;

      if (token) {
        dispatch(setAccessToken({ token, role }));
      } else {
        toast.error('Invalid or expired link.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error('An error occurred during verification. Please try again.');
      } else {
        toast.error('An unknown error occurred.');
      }
    }
  };
