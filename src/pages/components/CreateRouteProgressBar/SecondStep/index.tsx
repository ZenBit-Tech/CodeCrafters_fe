import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import luggageActiveIcon from '@/assets/icons/luggage-icon-active.svg';
import luggageIcon from '@/assets/icons/luggage-icon.svg';
import { stageText, stepContainer } from '../styles';

const SecondStep: FC<{ isPurple: boolean }> = ({ isPurple }) => {
  return (
    <Box sx={stepContainer}>
      <img src={isPurple ? luggageActiveIcon : luggageIcon} />
      <Typography sx={stageText}>Order management</Typography>
    </Box>
  );
};

export default SecondStep;
