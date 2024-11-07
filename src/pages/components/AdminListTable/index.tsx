import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  IconButton,
  MenuItem,
  Pagination,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import {
  StyledSelect,
  TableTitle,
  ActionsContainer,
  ListHeader,
  AdminListItem,
  FlexBox,
  StyledAvatar,
  PaginationContainer,
  PaginationInfo,
  StyledPaginationButton,
  StyledPaginationItem,
  ScrollContainer,
} from '@/pages/components/AdminListTable/styles';

interface Admin {
  id: number;
  name: string;
  email: string;
}

interface AdminListTableProps {
  paginatedAdmins: Admin[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  itemsPerPage: number;
  setItemsPerPage: (count: number) => void;
  page: number;
  setPage: (page: number) => void;
  pageCount: number;
  startIndex: number;
  endIndex: number;
  getInitials: (name: string) => string;
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
  getInitials,
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
              <StyledAvatar>{getInitials(admin.name)}</StyledAvatar>
              <Box>
                <TableTitle>{admin.name}</TableTitle>
                <Typography variant="subtitle2" color="textSecondary">
                  {admin.email}
                </Typography>
              </Box>
            </FlexBox>
            <Box>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
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