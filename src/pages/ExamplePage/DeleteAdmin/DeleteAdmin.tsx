import { useState } from 'react';
import './styles.css';
import axios, { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PopupMessage from '@/components/PopupMessage';

import trashBin from '@/assets/trash.png';
import { RootState } from '@/store/store';

const DeleteAdmin = ({ adminId }: { adminId: number }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const authToken = useSelector((store: RootState) => store.auth.token);

  const deleteAdminRequest = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/admins/${adminId}`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: authToken,
        },
      });

      toast('Admin deleted successfully', { type: 'success' });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast(`${error.response?.data.message}`, { type: 'error' });
      }
    } finally {
      setIsOpened(false);
    }
  };

  return (
    <>
      <img
        src={trashBin}
        style={{ cursor: 'pointer' }}
        alt="edit"
        onClick={() => setIsOpened(!isOpened)}
      />
      <PopupMessage
        open={isOpened}
        onClose={() => setIsOpened(!isOpened)}
        onConfirm={() => deleteAdminRequest()}
        heading={'Admin delete action'}
        mainMessage={'Do you reallu want to delete this admin'}
        subMessage={"You can't restore it after deleting"}
        cancelText="cancel"
        confirmText="delete"
      />
    </>
  );
};

export default DeleteAdmin;
