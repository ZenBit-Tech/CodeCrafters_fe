import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { t } from 'i18next';

import Loader from '@/components/Loader/Loader';
import UserRow from '@/components/UserRow';
import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

import useUsers from './useFetchUsers';
import UserForm from './UserForm/UserForm';
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
      <Box
        sx={{
          boxShadow: `0px 4px 18px 0px ${COLORS.text.extraLight}`,
          borderRadius: 1,
          backgroundColor: COLORS.text.white,
          width: '100%',
          padding: '24px',
        }}
      >
        <Typography
          sx={{ color: COLORS.text.dark, fontWeight: FONT.fontWeight.large }}
        >
          {t('settings.title')}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '20px',
            height: '38px',
            gap: 2,
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name, email..."
            sx={{
              padding: 0,
              '& .MuiOutlinedInput-root': {
                height: '100%',
              },
              '& .MuiFormLabel-root': {
                transform: searchTerm
                  ? 'translate(14px, -9px) scale(0.75)'
                  : 'translate(14px, 9px) scale(1)',
              },
              '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                transform: 'translate(14px, -9px) scale(0.75)',
                maxWidth: 'calc(133% - 32px)',
              },
            }}
          />
          <Select
            value={filterByRole}
            onChange={(e) => handleRoleFilterChange(e.target.value)}
            displayEmpty
            variant="outlined"
            sx={{ color: COLORS.text.dark }}
          >
            <MenuItem value="">{t('settings.select.allRoles')}</MenuItem>
            <MenuItem value="DISPATCHER">
              {t('settings.select.dispatcher')}
            </MenuItem>
            <MenuItem value="DRIVER">{t('settings.select.driver')}</MenuItem>
          </Select>
          <UserForm
            mode="create"
            fetchUsers={fetchUsers}
            addUserToList={addUserToList}
          />
        </Box>

        <Divider />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px',
            alignItems: 'center',
          }}
        >
          {columns.map(({ key, label }) => (
            <Box
              key={key}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: key === 'role' ? '15%' : key === 'name' ? '25%' : '20%',
              }}
            >
              <Typography
                sx={{
                  color: COLORS.text.dark,
                  fontSize: FONT.fontSize.small,
                }}
              >
                {label}
              </Typography>
              <IconButton onClick={() => toggleSortOrder(key)}>
                {sortOrder[validKeys[key] || key] === 'asc' ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          ))}
          <Typography
            sx={{ color: COLORS.text.dark, fontSize: FONT.fontSize.small }}
          >
            {t('settings.columns.actions')}
          </Typography>
        </Box>

        <Divider />

        {users.map((user) => (
          <UserRow
            key={Number(user.id)}
            user={{
              id: Number(user.id),
              fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
              email: user.email,
              phoneNumber: user.phoneNumber,
              role: user.role,
            }}
            fetchUsers={fetchUsers}
            addUserToList={addUserToList}
          />
        ))}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '20px',
          }}
        >
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
