import React from 'react';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { Avatar } from '@mui/material';

interface UserAvatarProps {
  firstName: string;
  lastName?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  firstName = '',
  lastName = '',
}) => {
  const initials =
    firstName.charAt(0).toUpperCase() +
    (lastName ? lastName.charAt(0).toUpperCase() : '');

  return (
    <Avatar
      sx={{
        width: 38,
        height: 38,
        fontSize: FONT.fontSize.small,
        color: COLORS.main.dark,
        backgroundColor: COLORS.main.light,
      }}
    >
      {initials || '?'}
    </Avatar>
  );
};

export default UserAvatar;
