import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardLayout as ToolpadDashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { COLORS } from '@/constants/colors';

const DashboardLayout: React.FC = () => {
  return (
    <ToolpadDashboardLayout
      sx={{
        '& [aria-label="Dark mode"]': {
          visibility: 'hidden',
        },
        '& h4.MuiTypography-h4': {
          display: 'none',
        },
        backgroundColor: COLORS.text.extraLight,
      }}
    >
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ToolpadDashboardLayout>
  );
};

export default DashboardLayout;
