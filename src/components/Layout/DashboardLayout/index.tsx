import React from 'react';
import { Outlet } from 'react-router-dom';

import { DashboardLayout as ToolpadDashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

const DashboardLayout: React.FC = () => {
  return (
    <ToolpadDashboardLayout
      sx={{
        '& [aria-label="Dark mode"]': {
          visibility: 'hidden',
        },
      }}
    >
      <PageContainer title="">
        <Outlet />
      </PageContainer>
    </ToolpadDashboardLayout>
  );
};

export default DashboardLayout;
