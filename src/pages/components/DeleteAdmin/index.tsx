import React from 'react';
import IconButton from '@mui/material/IconButton';

import { useDeleteAdmin } from '@/pages/components/DeleteAdmin/useDeleteAdmin';
import PopupMessage from '@/components/PopupMessage';
import { DeleteIcon } from '@/pages/components/DeleteAdmin/styles';
import deleteIcon from '@/assets/trash.png';

const DeleteAdmin = ({
  adminId,
  refreshAdmins,
}: {
  adminId: number;
  refreshAdmins: () => Promise<void>;
}): React.JSX.Element => {
  const { isOpened, handleOpen, handleClose, deleteAdminRequest, t } =
    useDeleteAdmin(adminId, refreshAdmins);

  return (
    <>
      <IconButton color="error" onClick={handleOpen}>
        <DeleteIcon src={deleteIcon} />
      </IconButton>
      <PopupMessage
        open={isOpened}
        onClose={handleClose}
        onConfirm={deleteAdminRequest}
        heading={t('deleteAdmin.heading')}
        mainMessage={t('deleteAdmin.mainMessage')}
        subMessage={t('deleteAdmin.subMessage')}
        cancelText={t('deleteAdmin.cancelText')}
        confirmText={t('deleteAdmin.confirmText')}
      />
    </>
  );
};

export default DeleteAdmin;
