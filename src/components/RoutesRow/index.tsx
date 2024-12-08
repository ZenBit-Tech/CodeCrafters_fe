import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import { t } from 'i18next';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { StatusEnum } from '@/constants/status';

import { IconWrapper } from '@/components/RoutesRow/styles';
import noteIcon from '@/assets/icons/note.svg';
import visibilityIcon from '@/assets/icons/eye.svg';
import moreIcon from '@/assets/icons/dots-vertical.svg';
import UserAvatar from '@/components/UserAvatar';
import Status from '@/components/Status';

const normalizeStatus = (status: string): StatusEnum => {
  const normalizedStatus = status.toLowerCase().replace(/ /g, '_');
  return StatusEnum[normalizedStatus.toUpperCase() as keyof typeof StatusEnum];
};

interface RoutesRowProps {
  routeId: number;
  date: string;
  driverFirstName: string;
  driverLastName: string;
  driverPhone: string | null;
  stopsCount: number;
  route_time: string;
  distance: number;
  status: StatusEnum;
}

const RoutesRow: React.FC<RoutesRowProps> = ({
  routeId,
  date,
  driverFirstName,
  driverLastName,
  driverPhone,
  stopsCount,
  route_time,
  distance,
  status,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = (): void => {
    navigate(`/routes/${routeId}`);
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1.5fr 2fr 1fr 1.5fr 1fr 1.5fr 1.5fr"
      padding={2}
      gap={2}
      borderBottom={`1px solid ${COLORS.text.border}`}
      alignItems="center"
    >
      <Typography variant="body2" color={COLORS.text.medium}>
        {routeId}
      </Typography>
      <Typography variant="body2" color={COLORS.text.medium}>
        {date}
      </Typography>

      <Box display="flex" alignItems="center" sx={{ minWidth: '150px' }}>
        <UserAvatar firstName={driverFirstName} lastName={driverLastName} />
        <Box ml={1}>
          <Typography
            variant="body2"
            color={COLORS.text.medium}
            fontWeight={FONT.fontWeight.large}
          >{`${driverFirstName} ${driverLastName}`}</Typography>
          <Typography variant="body2" color={COLORS.text.light}>
            {driverPhone}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body2" color={COLORS.text.medium}>
        {stopsCount} stops
      </Typography>

      <Typography variant="body2" color={COLORS.text.medium}>
        {route_time}
      </Typography>
      <Typography variant="body2" color={COLORS.text.medium}>
        {distance} km
      </Typography>
      <Status status={normalizeStatus(status)} />
      <Box display="flex" gap={1}>
        <IconButton>
          <IconWrapper src={noteIcon} alt={t('Notifications')} />
        </IconButton>
        <IconButton onClick={handleViewDetails}>
          <IconWrapper src={visibilityIcon} alt={t('Show icon')} />
        </IconButton>
        <IconButton>
          <IconWrapper src={moreIcon} alt={t('More options')} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default RoutesRow;
