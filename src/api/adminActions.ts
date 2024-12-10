import { toast } from 'react-toastify';
import i18n from '@/utils/i18n';

import { Admins, AdminForm, Company } from '@/interfaces/AdminList';
import axiosInstance from '@/utils/axiosInstance';
import { ADMINROLE, LOGO } from '@/constants/constants';
import { store } from '@/store/store';
import { setisVisible } from '@/store/slices/loaderSlice';

export const getAdminList = async (companyId: number): Promise<Admins[]> => {
  try {
    store.dispatch(setisVisible(true));
    const response = await axiosInstance.get(`/admins?companyId=${companyId}`);
    return response.data;
  } catch {
    toast.error(i18n.t('adminApi.fetch_failed'));
    throw new Error(i18n.t('adminApi.unexpected_error'));
  } finally {
    store.dispatch(setisVisible(false));
  }
};

export const getCompanyById = async (company_id: number): Promise<Company> => {
  try {
    store.dispatch(setisVisible(true));
    const response = await axiosInstance.get(`/company/${company_id}`);
    return response.data;
  } catch {
    toast.error(i18n.t('adminApi.fetch_failed'));
    throw new Error(i18n.t('adminApi.unexpected_error'));
  } finally {
    store.dispatch(setisVisible(false));
  }
};

export const addAdmin = async (
  formData: AdminForm,
  companyId: number
): Promise<void> => {
  try {
    const response = await axiosInstance.post(`/admins`, {
      ...formData,
      logo: LOGO,
      company_id: companyId,
      role: ADMINROLE,
    });
    if (response.data.status === 201) {
      toast.success(i18n.t('adminApi.created_successfully'));
    }
  } catch {
    toast.error(i18n.t('adminApi.create_failed'));
    throw new Error(i18n.t('adminApi.unexpected_error'));
  }
};

export const updateAdmin = async (
  formData: AdminForm,
  userId: number
): Promise<void> => {
  try {
    store.dispatch(setisVisible(true));
    const response = await axiosInstance.patch(`/admins/${userId}`, {
      ...formData,
      logo: LOGO,
    });
    if (response.data.status === 200) {
      toast.success(i18n.t('adminApi.updated_successfully'));
    }
  } catch {
    toast.error(i18n.t('adminApi.update_failed'));
    throw new Error(i18n.t('adminApi.unexpected_error'));
  } finally {
    store.dispatch(setisVisible(false));
  }
};

export const deleteAdmin = async (userId: number): Promise<void> => {
  try {
    store.dispatch(setisVisible(true));
    await axiosInstance.delete(`/admins/${userId}`);

    toast.success(i18n.t('adminApi.deleted_successfully'));
  } catch {
    toast.error(i18n.t('adminApi.delete_failed'));
    throw new Error(i18n.t('adminApi.unexpected_error'));
  } finally {
    store.dispatch(setisVisible(false));
  }
};
