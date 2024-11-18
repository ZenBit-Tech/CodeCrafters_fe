import { toast } from 'react-toastify';
import i18n from '@/utils/i18n';

import { Admin, Admins, AdminForm } from '@/interfaces/AdminList';
import axiosInstance from '@/utils/axiosInstance';

export const getAdminList = async (): Promise<Admins[]> => {
  const response = await axiosInstance.get(`/admins`);

  return response.data;
};

export const addAdmin = async (
  formData: AdminForm,
  companyId: number
): Promise<Admin> => {
  try {
    const response = await axiosInstance.post(`/admins`, {
      ...formData,
      logo: 'http://logo-sample',
      company_id: companyId,
      role: 'admin',
    });
    if (response.data.status === 201) {
      toast.success(i18n.t('admin.created_successfully'));
    }
    return response.data;
  } catch {
    toast.error(i18n.t('admin.create_failed'));
    throw new Error(i18n.t('errors.unexpected_error'));
  }
};

export const updateAdmin = async (
  formData: AdminForm,
  userId: number
): Promise<Admin> => {
  try {
    const response = await axiosInstance.patch(`/admins/${userId}`, {
      ...formData,
      logo: 'http://logo-sample',
    });
    if (response.data.status === 200) {
      toast.success(i18n.t('admin.updated_successfully'));
    }

    return response.data;
  } catch {
    toast.error(i18n.t('admin.update_failed'));
    throw new Error(i18n.t('errors.unexpected_error'));
  }
};

export const deleteAdmin = async (userId: number): Promise<void> => {
  try {
    await axiosInstance.delete(`/admins/${userId}`);

    toast.success(i18n.t('admin.deleted_successfully'));
  } catch {
    toast.error(i18n.t('admin.delete_failed'));
    throw new Error(i18n.t('errors.unexpected_error'));
  }
};
