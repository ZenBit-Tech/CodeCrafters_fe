import React from 'react';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NoteIcon from '@mui/icons-material/Note';
import { Box, IconButton, Typography } from '@mui/material';

interface RouteInfoProps {
  routeTime: string;
  city: string;
}

const DriverRouteInfo: React.FC<RouteInfoProps> = ({ routeTime, city }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
      gap={1}
    >
      <Typography
        variant="body1"
        fontWeight={FONT.fontWeight.small}
        fontSize={FONT.fontSize.medium}
        color={COLORS.text.medium}
      >
        {routeTime}
      </Typography>
      <Typography
        variant="body2"
        color={COLORS.text.medium}
        fontWeight={FONT.fontWeight.large}
        fontSize={FONT.fontSize.medium}
      >
        {city}
      </Typography>

      <Box display="flex" gap={1}>
        <IconButton>
          <LocationOnIcon fontSize="medium" />
        </IconButton>
        <IconButton>
          <NoteIcon fontSize="medium" />
        </IconButton>
        <IconButton>
          <DragIndicatorIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DriverRouteInfo;
