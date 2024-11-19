import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import routPinActiveIcon from '@/assets/icons/route-pin-active-icon.svg';
import routPinIcon from '@/assets/icons/route-pin-icon.svg';
import { stageText, stepContainer } from '../styles';

const FourStep: FC<{ isPurple: boolean }> = ({ isPurple }) => {
  return (
    <Box sx={stepContainer}>
      <img src={isPurple ? routPinActiveIcon : routPinIcon} />
      <Typography sx={stageText}>Route management</Typography>
    </Box>
  );
};

export default FourStep;
