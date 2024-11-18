import { useState } from 'react';
import { deleteAdmin } from '@/api/adminActions';
import { useTranslation } from 'react-i18next';

export const useDeleteAdmin = (
  adminId: number,
  refreshAdmins: () => Promise<void>
) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleOpen = (): void => setIsOpened(true);
  const handleClose = (): void => setIsOpened(false);

  const deleteAdminRequest = async (): Promise<void> => {
    try {
      await deleteAdmin(adminId);
      await refreshAdmins();
      handleClose();
    } catch (error) {
      console.error('Failed to delete admin:', error);
    }
  };

  return {
    isOpened,
    handleOpen,
    handleClose,
    deleteAdminRequest,
    t,
  };
};
