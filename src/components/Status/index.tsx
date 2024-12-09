import React from 'react';
import { useTranslation } from 'react-i18next';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { StatusEnum } from '@/constants/status';
import { Box, Typography } from '@mui/material';

interface StatusProps {
  status: StatusEnum;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  const { t } = useTranslation();

  const statusStyles = {
    on_time: {
      backgroundColor: COLORS.status.completed.bg,
      color: COLORS.status.completed.text,
    },
    'Not arrived': {
      backgroundColor: COLORS.status.notArrived.bg,
      color: COLORS.status.notArrived.text,
    },
    'At Risk': {
      backgroundColor: COLORS.status.atRisk.bg,
      color: COLORS.status.atRisk.text,
    },
    completed: {
      backgroundColor: COLORS.status.completed.bg,
      color: COLORS.status.completed.text,
    },
    Completed: {
      color: COLORS.main.dark,
      backgroundColor: COLORS.main.light,
    },
    failed: {
      backgroundColor: COLORS.status.failed.bg,
      color: COLORS.status.failed.text,
    },
    Failed: {
      backgroundColor: COLORS.status.failed.bg,
      color: COLORS.status.failed.text,
    },
    not_arrived: {
      backgroundColor: COLORS.status.notArrived.bg,
      color: COLORS.status.notArrived.text,
    },
    at_risk: {
      backgroundColor: COLORS.status.atRisk.bg,
      color: COLORS.status.atRisk.text,
    },
    upcoming: {
      backgroundColor: COLORS.status.upcoming.bg,
      color: COLORS.status.upcoming.text,
    },
    Upcoming: {
      backgroundColor: COLORS.status.upcoming.bg,
      color: COLORS.status.upcoming.text,
    },
  };

  const formattedStatus = t(`${status}`)
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 8px',
        borderRadius: '4px',
        ...statusStyles[status],
      }}
    >
      <Typography
        variant="body2"
        fontSize={FONT.fontSize.small}
        fontWeight={FONT.fontWeight.medium}
      >
        {formattedStatus}
      </Typography>
    </Box>
  );
};

export default Status;
