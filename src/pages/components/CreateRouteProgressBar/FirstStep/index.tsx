import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import calendarIcon from '@/assets/icons/calendar-icon.svg';
import {
  stepContainer,
  stageText,
} from '@/pages/components/CreateRouteProgressBar/styles';

const FirstStep: FC = () => {
  return (
    <Box sx={stepContainer}>
      <img src={calendarIcon} />
      <Typography sx={stageText}>{t('Date management')}</Typography>
    </Box>
  );
};

export default FirstStep;
