import React from 'react';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { Avatar } from '@mui/material';

interface DriverAvatarProps {
  firstName: string;
  lastName: string;
}

const DriverAvatar: React.FC<DriverAvatarProps> = ({ firstName, lastName }) => {
  const initials = `${firstName[0]}${lastName[0]}`;

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
      {initials}
    </Avatar>
  );
};

export default DriverAvatar;
