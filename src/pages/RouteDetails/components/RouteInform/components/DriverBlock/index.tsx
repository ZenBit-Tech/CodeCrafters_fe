import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import UserAvatar from '@/components/UserAvatar';
import {
  driverBlockContainerStyles,
  routePropsBlockStyles,
  routePropsRowStyles,
} from './styles';

interface DriverBlockProps {
  fullName: string;
  collectionTime: string;
  stops: number;
  distance: number;
}

const DriverBlock: FC<DriverBlockProps> = ({
  fullName,
  collectionTime,
  stops,
  distance,
}) => {
  const splitName = fullName.split(' ');

  return (
    <Box sx={driverBlockContainerStyles}>
      <UserAvatar firstName={splitName[0]} lastName={splitName[1]} />
      <Box sx={routePropsBlockStyles}>
        <Typography>{fullName}</Typography>
        <Box sx={routePropsRowStyles}>
          <Typography>{collectionTime}</Typography>
          <Typography>{t(`${stops} stops`)}</Typography>
          <Typography>{distance} km</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DriverBlock;
