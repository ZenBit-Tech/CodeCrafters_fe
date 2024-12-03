import React from 'react';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import CompanyForm from '@/pages/CompanyListPage/CompanyForm/CompanyForm';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, IconButton, Typography } from '@mui/material';

import UserAvatar from '../UserAvatar';

interface CompanyItemProps {
  company: { id: number; name: string; email: string };
  fetchCompanies: () => void;
  onNavigate: (id: number) => void;
}

const CompanyItem: React.FC<CompanyItemProps> = ({
  company,
  fetchCompanies,
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
      <UserAvatar firstName={firstName} lastName={lastName} />

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

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CompanyForm
          mode="update"
          fetchCompanies={fetchCompanies}
          companyId={company.id}
          companyData={company}
          showAsButton={false}
          isIconButton={true}
          addCompanyToList={() => {}}
        />
        <IconButton onClick={() => onNavigate(company.id)}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CompanyItem;
