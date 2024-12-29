import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { t } from 'i18next';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { StatusEnum } from '@/constants/status';

import { IconWrapper, NotesCount } from '@/components/RoutesRow/styles';
import noteIcon from '@/assets/icons/note.svg';
import visibilityIcon from '@/assets/icons/eye.svg';
import moreIcon from '@/assets/icons/dots-vertical.svg';
import UserAvatar from '@/components/UserAvatar';
import Status from '@/components/Status';
import RouteDetailsModal from '@/pages/Routes/components/RouteDetailsModal';
import useRoutesRow from './useRoutesRow';

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
  failedOrdersCount: number;
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
  failedOrdersCount,
}) => {
  const {
    handleViewDetails,
    handleNoteIconClick,
    setModalOpen,
    modalOpen,
    modalData,
  } = useRoutesRow(routeId);

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1.5fr 2fr 1fr 1.5fr 1fr 1fr 1.5fr"
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
      <Status status={status} />
      <Box display="flex" gap={1}>
        <IconButton
          onClick={failedOrdersCount > 0 ? handleNoteIconClick : undefined}
          disabled={failedOrdersCount === 0}
          sx={{
            cursor: failedOrdersCount > 0 ? 'pointer' : 'disabled',
          }}
        >
          <IconWrapper src={noteIcon} alt={t('Notifications')} />
          {failedOrdersCount > 0 && (
            <NotesCount>{failedOrdersCount}</NotesCount>
          )}
        </IconButton>
        <IconButton onClick={handleViewDetails}>
          <IconWrapper src={visibilityIcon} alt={t('Show icon')} />
        </IconButton>
        <IconButton>
          <IconWrapper src={moreIcon} alt={t('More options')} />
        </IconButton>
      </Box>

      <RouteDetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        data={modalData}
      />
    </Box>
  );
};

export default RoutesRow;
