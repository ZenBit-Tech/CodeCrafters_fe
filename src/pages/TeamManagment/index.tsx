import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { t } from 'i18next';
import SearchIcon from '@mui/icons-material/Search';

import Loader from '@/components/Loader/Loader';
import UserRow from '@/components/UserRow';
import ConditionalWrapper from '@/components/ConditionalWrapper';

import {
  container,
  title,
  filtersContainer,
  searchField,
  roleSelect,
  columnsHeader,
  columnLabel,
  columnTypography,
  paginationContainer,
  buttonContainer,
} from './styles';
import useUsers from './useFetchUsers';
import UserForm from './UserForm';
import useUserFilters from './useUserFilters';

const columns = [
  { key: 'role', label: t('settings.columns.role') },
  { key: 'name', label: t('settings.columns.name') },
  { key: 'email', label: t('settings.columns.email') },
  { key: 'phoneNumber', label: t('settings.columns.phoneNumber') },
];

const validKeys: Record<string, string> = {
  name: 'full_name',
  email: 'email',
  phoneNumber: 'phone_number',
  role: 'role',
};

const TeamManagementPage: React.FC = () => {
  const {
    page,
    searchTerm,
    filterByRole,
    sortOrder,
    handleSearchChange,
    handleRoleFilterChange,
    toggleSortOrder,
    handlePageChange,
    triggerSearch,
    pendingSearchTerm,
    handleKeyDown,
  } = useUserFilters();

  const { users, totalPages, fetchUsers, addUserToList } = useUsers(
    page,
    searchTerm,
    filterByRole,
    sortOrder
  );

  return (
    <>
      <Loader />
      <Box sx={container}>
        <Typography sx={title}>{t('settings.title')}</Typography>

        <Box sx={filtersContainer}>
          <TextField
            label="Search"
            variant="outlined"
            value={pendingSearchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Search by name, email..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={triggerSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={searchField}
          />

          <Box sx={buttonContainer}>
            <Select
              value={filterByRole}
              onChange={(e) => handleRoleFilterChange(e.target.value)}
              displayEmpty
              variant="outlined"
              sx={roleSelect}
            >
              <MenuItem value="">{t('settings.select.allRoles')}</MenuItem>
              <MenuItem value="DISPATCHER">
                {t('settings.select.dispatcher')}
              </MenuItem>
              <MenuItem value="DRIVER">{t('settings.select.driver')}</MenuItem>
              <MenuItem value="ADMIN">{t('settings.select.admin')}</MenuItem>
            </Select>
            <UserForm
              mode="create"
              fetchUsers={fetchUsers}
              addUserToList={addUserToList}
            />
          </Box>
        </Box>

        <Divider />

        <Box sx={columnsHeader}>
          {columns.map(({ key, label }) => (
            <Box key={key} sx={columnLabel(key)}>
              <Typography sx={columnTypography}>{label}</Typography>
              <IconButton onClick={() => toggleSortOrder(key)}>
                {sortOrder[validKeys[key] || key] === 'asc' ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          ))}
          <Typography sx={columnTypography}>
            {t('settings.columns.actions')}
          </Typography>
        </Box>

        <Divider />

        <ConditionalWrapper
          items={users}
          emptyContent={t('settings.message.noUsersFound')}
        >
          {users.map((user) => (
            <UserRow
              key={Number(user.id)}
              user={{
                id: Number(user.id),
                fullName:
                  `${user.firstName || ''} ${user.lastName || ''}`.trim(),
                email: user.email,
                phoneNumber: user.phoneNumber,
                role: user.role,
              }}
              fetchUsers={fetchUsers}
              addUserToList={addUserToList}
            />
          ))}
        </ConditionalWrapper>
        <Box sx={paginationContainer}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
            color="primary"
          />
        </Box>
      </Box>
    </>
  );
};

export default TeamManagementPage;
