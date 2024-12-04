import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, MenuItem, Pagination, Typography } from '@mui/material';

import { addAdmin, updateAdmin } from '@/api/adminActions';
import editIcon from '@/assets/edit.png';
import TextInput from '@/components/TextInput';
import UserAvatar from '@/components/UserAvatar';
import { ITEMS_PER_PAGE_OPTIONS } from '@/constants/constants';
import { AdminListTableProps } from '@/interfaces/AdminList';
import AdminForm from '@/pages/components/AdminForm';
import {
  ActionsContainer,
  AdminListItem,
  FlexBox,
  ListHeader,
  PaginationContainer,
  PaginationInfo,
  ScrollContainer,
  StyledPaginationButton,
  StyledPaginationItem,
  StyledSelect,
  TableTitle,
} from '@/pages/components/AdminListTable/styles';
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
  filteredAdmins,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <ActionsContainer>
        <StyledSelect
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          size="small"
        >
          {ITEMS_PER_PAGE_OPTIONS.map((value) => (
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
          <AdminForm
            formTitle={t('addNewAdmin.title')}
            buttonContent={`+ ${t('addNewAdmin.button')}`}
            onSubmit={async (data) => await addAdmin(data, companyId)}
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
              <UserAvatar
                firstName={admin.firstName}
                lastName={admin.lastName}
              ></UserAvatar>
              <Box>
                <TableTitle>{admin.full_name}</TableTitle>
                <Typography variant="subtitle2" color="textSecondary">
                  {admin.email}
                </Typography>
              </Box>
            </FlexBox>
            <FlexBox>
              <AdminForm
                isEditing
                formTitle={t('updateAdmin.title')}
                buttonContent={editIcon}
                initialValues={{
                  full_name: admin.full_name,
                  email: admin.email,
                }}
                onSubmit={async (data) => await updateAdmin(data, admin.id)}
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
