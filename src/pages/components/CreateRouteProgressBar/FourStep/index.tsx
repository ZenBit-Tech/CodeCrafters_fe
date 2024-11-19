import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import routPinActiveIcon from '@/assets/icons/route-pin-active-icon.svg';
import routPinIcon from '@/assets/icons/route-pin-icon.svg';
import {
  stepContainer,
  stageText,
} from '@/pages/components/CreateRouteProgressBar/styles';

const FourStep: FC<{ isPurple: boolean }> = ({ isPurple }) => {
  return (
    <Box sx={stepContainer}>
      <img src={isPurple ? routPinActiveIcon : routPinIcon} />
      <Typography sx={stageText}>{t('Route management')}</Typography>
    </Box>
  );
};

export default FourStep;
