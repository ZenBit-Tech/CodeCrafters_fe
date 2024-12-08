import React, { useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import { assets } from '@/assets/assets';
import UserAvatar from '@/components/UserAvatar';
import { COLORS } from '@/constants/colors';
import { User } from '@/pages/TeamManagment/types';
import UserForm from '@/pages/TeamManagment/UserForm/UserForm';
import { deleteUser } from '@/services/usersService';
import { getFirstName, getSecondName } from '@/utils/nameUtils';

import PopupMessage from '../PopupMessage';

interface UserItemProps {
  user: {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    role: string;
  };
  fetchUsers: () => void;
  addUserToList: (user: User) => void;
}

const UserRow: React.FC<UserItemProps> = ({
  user,
  fetchUsers,
  addUserToList,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const firstName = getFirstName(user.fullName);
  const lastName = getSecondName(user.fullName);

  const handleDelete = async (): Promise<void> => {
    try {
      await deleteUser(user.id);
      fetchUsers();
    } catch (error) {
      toast(t('settings.message.errorDelete'), { type: 'error' });
      throw new Error(`${error}`);
    }
    setIsPopupOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <Typography
          sx={{
            color: COLORS.text.medium,
            width: '15%',
          }}
        >
          {user.role}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', width: '25%' }}>
          <UserAvatar firstName={firstName} lastName={lastName} />
          <Typography sx={{ marginLeft: '10px', color: COLORS.text.medium }}>
            {firstName} {lastName}
          </Typography>
        </Box>

        <Typography
          sx={{
            color: COLORS.text.medium,
            width: '20%',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {user.email}
        </Typography>

        <Typography sx={{ color: COLORS.text.medium, width: '20%' }}>
          {user.phoneNumber ? user.phoneNumber : `${t('noPhoneNum')}`}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <UserForm
            mode="update"
            fetchUsers={fetchUsers}
            addUserToList={addUserToList}
            userId={user.id}
            userData={{
              fullName: user.fullName,
              email: user.email,
              phoneNumber: user.phoneNumber,
              role: user.role,
            }}
          />
          <IconButton onClick={() => setIsPopupOpen(true)} aria-label="Delete">
            <img src={assets.trashIcon} alt="delete-icon" />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <PopupMessage
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={handleDelete}
        heading={t('settings.popup.heading')}
        mainMessage={t('settings.popup.mainMessage', { user: user.fullName })}
        subMessage={t('settings.popup.subMessage')}
        cancelText={t('settings.popup.cancelText')}
        confirmText={t('settings.popup.confirmText')}
      />
    </>
  );
};

export default UserRow;
