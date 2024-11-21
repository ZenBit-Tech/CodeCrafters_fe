import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Typography } from '@mui/material';

import Button from '@/components/Button';
import { FlexBox } from '@/pages/AdminList/styles';

interface AdminSidebarProps {
  companyName: string;
  clientName: string;
  clientEmail: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  companyName,
  clientName,
  clientEmail,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Box display="flex" justifyContent="center" mb={3} mt={7}>
        <Typography variant="h2">{companyName}</Typography>
      </Box>

      <Divider />

      <Box mt={3}>
        <Typography variant="subtitle2">
          {t('adminList.clientDetails')}
        </Typography>

        <FlexBox justifyContent="flex-start" mt={1}>
          <Typography variant="body2">{t('adminList.name')}</Typography>
          <Typography variant="subtitle1">{clientName}</Typography>
        </FlexBox>

        <FlexBox justifyContent="flex-start" mt={1}>
          <Typography variant="body2">{t('adminList.email')}</Typography>
          <Typography variant="subtitle1">{clientEmail}</Typography>
        </FlexBox>
      </Box>

      <Box mt={2} display="flex" justifyContent="flex-start">
        <Button
          variant="colored"
          label={t('adminList.editButton')}
          sx={{ py: '6px' }}
        />
      </Box>
    </div>
  );
};

export default AdminSidebar;
