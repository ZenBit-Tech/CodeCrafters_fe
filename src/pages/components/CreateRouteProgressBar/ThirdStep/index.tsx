import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import PeopleActiveIcon from '@/assets/icons/people-icon-active.svg';
import PeopleIcon from '@/assets/icons/people-icon.svg';
import {
  stepContainer,
  stageText,
} from '@/pages/components/CreateRouteProgressBar/styles';

const ThirdStep: FC<{ isPurple: boolean }> = ({ isPurple }) => {
  return (
    <Box sx={stepContainer}>
      <img src={isPurple ? PeopleActiveIcon : PeopleIcon} />
      <Typography sx={stageText}>{t('Driver management')}</Typography>
    </Box>
  );
};

export default ThirdStep;
