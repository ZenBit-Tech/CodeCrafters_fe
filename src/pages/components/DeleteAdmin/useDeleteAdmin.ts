import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import { deleteAdmin } from '@/api/adminActions';

export interface UseDeleteAdminReturn {
  isOpened: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  deleteAdminRequest: () => Promise<void>;
  t: TFunction<'translation', undefined>;
}

export const useDeleteAdmin = (
  adminId: number,
  refreshAdmins: () => Promise<void>
): UseDeleteAdminReturn => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleOpen = (): void => setIsOpened(true);
  const handleClose = (): void => setIsOpened(false);

  const deleteAdminRequest = async (): Promise<void> => {
    await deleteAdmin(adminId);
    await refreshAdmins();
    handleClose();
  };

  return {
    isOpened,
    handleOpen,
    handleClose,
    deleteAdminRequest,
    t,
  };
};
