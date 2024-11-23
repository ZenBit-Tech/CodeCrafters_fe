import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Typography } from '@mui/material';

import { FlexBox } from '@/pages/AdminList/styles';
import CompanyForm from '@/pages/CompanyListPage/CompanyForm/CompanyForm';
import useAdminSideBar from '@/pages/components/AdminSideBar/useAdminSideBar';

interface AdminSidebarProps {
  companyId: number;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ companyId }) => {
  const { t } = useTranslation();
  const { company, refreshCompanyInfo } = useAdminSideBar(companyId);

  return (
    <div>
      <Box display="flex" justifyContent="center" mb={3} mt={7}>
        <Typography variant="h2">{company?.name}</Typography>
      </Box>

      <Divider />

      <Box mt={3}>
        <Typography variant="subtitle2">
          {t('adminList.clientDetails')}
        </Typography>

        <FlexBox justifyContent="flex-start" mt={1}>
          <Typography variant="body2">{t('adminList.name')}</Typography>
          <Typography variant="subtitle1">{company?.client_name}</Typography>
        </FlexBox>

        <FlexBox justifyContent="flex-start" mt={1}>
          <Typography variant="body2">{t('adminList.email')}</Typography>
          <Typography variant="subtitle1">{company?.email}</Typography>
        </FlexBox>
      </Box>

      <Box mt={2} display="flex" justifyContent="flex-start">
        <CompanyForm
          mode="update"
          fetchCompanies={refreshCompanyInfo}
          companyId={company?.id}
          companyData={company}
          showAsButton={true}
          isIconButton={false}
        />
      </Box>
    </div>
  );
};

export default AdminSidebar;
