import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';

import {
  SideBox,
  MainBox,
  TitleTypography,
  TitleContainer,
  StyledMainBox,
} from '@/pages/AdminList/styles';
import useAdminList from '@/pages/AdminList/useAdminList';
import AdminListTable from '@/pages/components/AdminListTable';
import AdminSidebar from '@/pages/components/AdminSideBar';

const AdminListPage: React.FC = () => {
  const { t } = useTranslation();
  const {
    searchQuery,
    setSearchQuery,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    paginatedAdmins,
    pageCount,
    startIndex,
    endIndex,
  } = useAdminList();

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} height="100%">
      <SideBox>
        <AdminSidebar
          companyName={t('adminList.companyName')}
          clientName="John Doe"
          clientEmail="vaftog@vultulkir.org"
        />
      </SideBox>

      <MainBox>
        <TitleContainer>
          <TitleTypography>{t('adminList.title')}</TitleTypography>
        </TitleContainer>

        <StyledMainBox>
          <AdminListTable
            paginatedAdmins={paginatedAdmins}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            page={page}
            setPage={setPage}
            pageCount={pageCount}
            startIndex={startIndex}
            endIndex={endIndex}
          />
        </StyledMainBox>
      </MainBox>
    </Stack>
  );
};

export default AdminListPage;
