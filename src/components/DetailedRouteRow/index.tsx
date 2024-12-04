import React from 'react';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { StatusEnum } from '@/constants/status';
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NoteIcon from '@mui/icons-material/Note';
import { Box, IconButton, Typography } from '@mui/material';

import Status from '../Status';

interface DetailedRouteRowProps {
  city: string;
  time: string;
  status: StatusEnum;
}

const DetailedRouteRow: React.FC<DetailedRouteRowProps> = ({
  city,
  time,
  status,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={1}
    >
      <Box display="flex" flexDirection="column">
        <Typography
          fontSize={FONT.fontSize.medium}
          fontWeight={FONT.fontWeight.large}
          color={COLORS.text.medium}
        >
          {city}
        </Typography>
        <Typography
          fontSize={FONT.fontSize.medium}
          fontWeight={FONT.fontWeight.small}
          color={COLORS.text.medium}
        >
          {time}
        </Typography>
      </Box>

      <Status status={status} />

      <Box display="flex" gap={1}>
        <IconButton>
          <NoteIcon fontSize="medium" />
        </IconButton>
        <IconButton>
          <LocationOnIcon fontSize="medium" />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DetailedRouteRow;
