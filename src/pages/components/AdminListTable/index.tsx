import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  IconButton,
  MenuItem,
  Pagination,
  Typography,
} from '@mui/material';

import editIcon from '@/assets/icons/edit.svg';
import deleteIcon from '@/assets/icons/delete.svg';
import Button from '@/components/Button';
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
  EditIcon,
  DeleteIcon,
} from '@/pages/components/AdminListTable/styles';
import DriverAvatar from '@/components/DriverAvatar';

interface Admin {
  id: number;
  name: string;
  email: string;
}

interface PaginatedAdmin extends Admin {
  firstName: string;
  lastName: string;
}

interface AdminListTableProps {
  paginatedAdmins: PaginatedAdmin[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
  page: number;
  setPage: (page: number) => void;
  pageCount: number;
  startIndex: number;
  endIndex: number;
}

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
          <Button
            variant="colored"
            label={t('adminList.addAdminButton')}
            sx={{ py: '6px' }}
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
                <TableTitle>{admin.name}</TableTitle>
                <Typography variant="subtitle2" color="textSecondary">
                  {admin.email}
                </Typography>
              </Box>
            </FlexBox>
            <Box>
              <IconButton>
                <EditIcon src={editIcon} alt={t('adminList.altText.edit')} />
              </IconButton>
              <IconButton>
                <DeleteIcon
                  src={deleteIcon}
                  alt={t('adminList.altText.delete')}
                />
              </IconButton>
            </Box>
          </AdminListItem>
        ))}
      </ScrollContainer>

      <PaginationContainer>
        <PaginationInfo>
          {t('adminList.pagination', {
            start: startIndex + 1,
            end: Math.min(endIndex, paginatedAdmins.length),
            total: paginatedAdmins.length,
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
