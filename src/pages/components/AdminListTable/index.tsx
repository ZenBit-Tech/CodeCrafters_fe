import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, MenuItem, Pagination, Typography } from '@mui/material';

import TextInput from '@/components/TextInput';
import {
  StyledSelect,
  TableTitle,
  ActionsContainer,
  ListHeader,
  AdminListItem,
  FlexBox,
  PaginationContainer,
  PaginationInfo,
  StyledPaginationButton,
  StyledPaginationItem,
  ScrollContainer,
} from '@/pages/components/AdminListTable/styles';
import DriverAvatar from '@/components/DriverAvatar';
import AddNewAdmin from '@/pages/components/AddNewAdmin';
import { AdminListTableProps } from '@/interfaces/AdminList';
import useAdminList from '@/pages/AdminList/useAdminList';
import UpdateAdmin from '@/pages/components/UpdateAdmin';
import DeleteAdmin from '@/pages/components/DeleteAdmin';

const AdminListTable: React.FC<AdminListTableProps> = ({
  paginatedAdmins,
  searchQuery,
  setSearchQuery,
  itemsPerPage,
  setItemsPerPage,
  page,
  setPage,
  pageCount,
  startIndex,
  endIndex,
  companyId,
  refreshAdmins,
}) => {
  const { t } = useTranslation();
  const { filteredAdmins } = useAdminList();

  return (
    <div>
      <ActionsContainer>
        <StyledSelect
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          size="small"
        >
          {[10, 20, 30].map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </StyledSelect>
        <FlexBox>
          <TextInput
            label={t('adminList.searchPlaceholder')}
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <AddNewAdmin
            companyId={Number(companyId)}
            refreshAdmins={refreshAdmins}
          />
        </FlexBox>
      </ActionsContainer>

      <ListHeader>
        <TableTitle>{t('adminList.adminName')}</TableTitle>
        <TableTitle>{t('adminList.actions')}</TableTitle>
      </ListHeader>

      <ScrollContainer>
        {paginatedAdmins.map((admin) => (
          <AdminListItem key={admin.id}>
            <FlexBox>
              <DriverAvatar
                firstName={admin.firstName}
                lastName={admin.lastName}
              ></DriverAvatar>
              <Box>
                <TableTitle>{admin.full_name}</TableTitle>
                <Typography variant="subtitle2" color="textSecondary">
                  {admin.email}
                </Typography>
              </Box>
            </FlexBox>
            <FlexBox>
              <UpdateAdmin
                userId={admin.id}
                full_name={admin.full_name}
                email={admin.email}
                refreshAdmins={refreshAdmins}
              />
              <DeleteAdmin adminId={admin.id} refreshAdmins={refreshAdmins} />
            </FlexBox>
          </AdminListItem>
        ))}
      </ScrollContainer>

      <PaginationContainer>
        <PaginationInfo>
          {t('adminList.pagination', {
            start: startIndex + 1,
            end: Math.min(endIndex, filteredAdmins.length),
            total: filteredAdmins.length,
          })}
        </PaginationInfo>
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_e, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <StyledPaginationItem
              {...item}
              slots={{
                previous: () => (
                  <StyledPaginationButton>Previous</StyledPaginationButton>
                ),
                next: () => (
                  <StyledPaginationButton>Next</StyledPaginationButton>
                ),
              }}
            />
          )}
        />
      </PaginationContainer>
    </div>
  );
};

export default AdminListTable;
