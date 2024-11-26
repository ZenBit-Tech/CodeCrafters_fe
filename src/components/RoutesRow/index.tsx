import React from 'react';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { StatusEnum } from '@/constants/status';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, IconButton, Typography } from '@mui/material';

import DriverAvatar from '../DriverAvatar';
import Status from '../Status';

interface RoutesRowProps {
  routeId: string;
  date: string;
  driverFirstName: string;
  driverLastName: string;
  driverPhone: string;
  stopsCount: number;
  workingHours: string;
  distance: number;
  status: StatusEnum;
}

const RoutesRow: React.FC<RoutesRowProps> = ({
  routeId,
  date,
  driverFirstName,
  driverLastName,
  driverPhone,
  stopsCount,
  workingHours,
  distance,
  status,
}) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1.5fr 2fr 1fr 1.5fr 1fr 1.5fr 1.5fr"
      padding={2}
      gap={2}
      borderBottom={`1px solid ${COLORS.text.border}`}
      alignItems="center"
    >
      <Typography variant="body2" color={COLORS.text.medium}>
        {routeId}
      </Typography>
      <Typography variant="body2" color={COLORS.text.medium}>
        {date}
      </Typography>

      <Box display="flex" alignItems="center" sx={{ minWidth: '150px' }}>
        <DriverAvatar firstName={driverFirstName} lastName={driverLastName} />
        <Box ml={1}>
          <Typography
            variant="body2"
            color={COLORS.text.medium}
            fontWeight={FONT.fontWeight.large}
          >{`${driverFirstName} ${driverLastName}`}</Typography>
          <Typography variant="body2" color={COLORS.text.light}>
            {driverPhone}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body2" color={COLORS.text.medium}>
        {stopsCount} stops
      </Typography>

      <Typography variant="body2" color={COLORS.text.medium}>
        {workingHours}
      </Typography>
      <Typography variant="body2" color={COLORS.text.medium}>
        {distance} km
      </Typography>
      <Status status={status} />
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

export default RoutesRow;
