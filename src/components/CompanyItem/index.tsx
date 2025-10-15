import React from 'react';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Typography } from '@mui/material';

import DriverAvatar from '../DriverAvatar';

interface CompanyItemProps {
  company: { id: number; name: string; email: string };
  onEdit: (id: number) => void;
  onNavigate: (id: number) => void;
}

const CompanyItem: React.FC<CompanyItemProps> = ({
  company,
  onEdit,
  onNavigate,
}) => {
  const firstName = company.name.split(' ')[0] || '';
  const lastName = company.name.split(' ')[1] || '';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        paddingY: 1,
        paddingX: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      <DriverAvatar firstName={firstName} lastName={lastName} />

      <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
        <Typography
          sx={{ fontSize: FONT.fontSize.medium, color: COLORS.text.dark }}
        >
          {company.name}
        </Typography>
        <Typography
          sx={{ fontSize: FONT.fontSize.small, color: COLORS.text.light }}
        >
          {company.email}
        </Typography>
      </Box>

      <Box>
        <IconButton onClick={() => onEdit(company.id)} sx={{ marginRight: 1 }}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onNavigate(company.id)}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CompanyItem;
