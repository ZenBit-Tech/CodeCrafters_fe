import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import luggageActiveIcon from '@/assets/icons/luggage-icon-active.svg';
import luggageIcon from '@/assets/icons/luggage-icon.svg';
import {
  stepContainer,
  stageText,
} from '@/pages/components/CreateRouteProgressBar/styles';

const SecondStep: FC<{ isPurple: boolean }> = ({ isPurple }) => {
  return (
    <Box sx={stepContainer}>
      <img src={isPurple ? luggageActiveIcon : luggageIcon} />
      <Typography sx={stageText}>{t('Order management')}</Typography>
    </Box>
  );
};

export default SecondStep;
