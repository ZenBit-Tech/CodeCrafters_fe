import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import calendarIcon from '@/assets/icons/calendar-icon.svg';
import grayCalendar from '@/assets/icons/unactive-calendar.svg';
import {
  stepContainer,
  stageText,
} from '@/pages/components/CreateRouteProgressBar/styles';

const FirstStep: FC<{ isPurple: boolean }> = ({ isPurple }) => {
  return (
    <Box sx={stepContainer}>
      <img src={isPurple ? calendarIcon : grayCalendar} />
      <Typography sx={stageText}>{t('Date management')}</Typography>
    </Box>
  );
};

export default FirstStep;
