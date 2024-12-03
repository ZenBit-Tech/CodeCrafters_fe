import React from 'react';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, IconButton, Typography } from '@mui/material';

import UserAvatar from '../UserAvatar';

interface DriverInfoProps {
  firstName: string;
  lastName: string;
  workingHours: string;
  stopsCount: number;
  distance: number;
  routeId: string;
}

const DriverInfoCard: React.FC<DriverInfoProps> = ({
  firstName,
  lastName,
  workingHours,
  stopsCount,
  distance,
  routeId,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={'space-between'}
      border={`1px solid ${COLORS.text.light} `}
      borderRadius={2}
      padding={'7px 14px'}
      gap={1}
    >
      <UserAvatar firstName={firstName} lastName={lastName} />
      <Box ml={2} display={'flex'} flexDirection={'column'}>
        <Typography
          color={COLORS.text.dark}
          fontWeight={FONT.fontWeight.large}
          variant="h6"
        >{`${firstName} ${lastName}`}</Typography>
        <Box display={'flex'} flexDirection={'row'} gap={1}>
          <Typography
            color={COLORS.text.light}
            fontWeight={FONT.fontWeight.large}
            variant="body2"
          >
            {workingHours}
          </Typography>
          <Typography
            color={COLORS.text.light}
            fontWeight={FONT.fontWeight.large}
            variant="body2"
          >
            {stopsCount} stops
          </Typography>
          <Typography
            color={COLORS.text.light}
            fontWeight={FONT.fontWeight.large}
            variant="body2"
          >
            {distance} km
          </Typography>
        </Box>
        <Typography color={COLORS.text.dark} variant="body2">
          {routeId}
        </Typography>
      </Box>
      <Box display="flex" gap={1}>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <VisibilityIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DriverInfoCard;
