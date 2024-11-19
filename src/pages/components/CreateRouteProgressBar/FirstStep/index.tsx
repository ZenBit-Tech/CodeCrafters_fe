import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import calendarIcon from '@/assets/icons/calendar-icon.svg';
import { stepContainer, stageText } from '../styles';

const FirstStep: FC = () => {
  return (
    <Box sx={stepContainer}>
      <img src={calendarIcon} />
      <Typography sx={stageText}>Date management</Typography>
    </Box>
  );
};

export default FirstStep;
