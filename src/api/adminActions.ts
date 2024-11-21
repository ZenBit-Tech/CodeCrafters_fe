import { toast } from 'react-toastify';
import i18n from '@/utils/i18n';

import { Admins, AdminForm } from '@/interfaces/AdminList';
import axiosInstance from '@/utils/axiosInstance';
import { LOGO } from '@/constants/constants';

const getUserRole = (): string | null => {
  try {
    const authData = JSON.parse(localStorage.getItem('persist:auth') || '{}');
    return authData?.role ? JSON.parse(authData.role) : null;
  } catch {
    return null;
  }
};

export const getAdminList = async (): Promise<Admins[]> => {
  try {
    const response = await axiosInstance.get(`/admins`);
    return response.data;
  } catch {
    toast.error(i18n.t('adminApi.fetch_failed'));
    throw new Error(i18n.t('adminApi.unexpected_error'));
  }
};

export const addAdmin = async (
  formData: AdminForm,
  companyId: number
): Promise<void> => {
  try {
    const role = getUserRole();

    const response = await axiosInstance.post(`/admins`, {
      ...formData,
      logo: LOGO,
      company_id: companyId,
      role: role,
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
  }
};

export const deleteAdmin = async (userId: number): Promise<void> => {
  try {
    await axiosInstance.delete(`/admins/${userId}`);

    toast.success(i18n.t('adminApi.deleted_successfully'));
  } catch {
    toast.error(i18n.t('adminApi.delete_failed'));
    throw new Error(i18n.t('adminApi.unexpected_error'));
  }
};
