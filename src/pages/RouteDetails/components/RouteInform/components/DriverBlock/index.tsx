import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import DriverAvatar from '@/components/DriverAvatar';
import {
  driverBlockContainerStyles,
  routePropsBlockStyles,
  routePropsRowStyles,
} from './styles';

const DriverBlock: FC = () => {
  return (
    <Box sx={driverBlockContainerStyles}>
      <DriverAvatar firstName={'John'} lastName={'Doe'} />
      <Box sx={routePropsBlockStyles}>
        <Typography>{t('John Doe')}</Typography>
        <Box sx={routePropsRowStyles}>
          <Typography>09:00 - 18:00</Typography>
          <Typography>{t('5 stops')}</Typography>
          <Typography>900 km</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DriverBlock;
