import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import CompanyItem from '@/components/CompanyItem';
import TextInput from '@/components/TextInput';
import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Divider,
  IconButton,
  Pagination,
  Typography,
} from '@mui/material';

import CompanyForm from './CompanyForm/CompanyForm';
import useCompanies from './useCompanies';
import usePaginationAndSorting from './usePaginationAndSorting';

const CompanyListPage: React.FC = () => {
  const { t } = useTranslation();

  const {
    page,
    sortOrder,
    searchTerm,
    handleSearchChange,
    handlePageChange,
    toggleSortOrder,
  } = usePaginationAndSorting();
  const navigate = useNavigate();
  const { companies, total, fetchCompanies, addCompanyToList } = useCompanies(
    page,
    10,
    searchTerm,
    sortOrder
  );

  return (
    <Box
      sx={{
        boxShadow: `0px 4px 18px 0px ${COLORS.text.extraLight}`,
        borderRadius: 1,
        backgroundColor: COLORS.text.white,
        width: '100%',
        padding: '24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '38px',
          justifyContent: 'flex-end',
          mb: 3,
        }}
      >
        <TextInput
          label={t('search.label')}
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder=""
          sx={{
            marginRight: 2,
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
        <CompanyForm
          mode="create"
          fetchCompanies={fetchCompanies}
          addCompanyToList={addCompanyToList}
        />
      </Box>

      <Divider />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: FONT.fontSize.small,
              fontWeight: FONT.fontWeight.small,
              color: COLORS.text.dark,
            }}
          >
            {t('companyName')}
          </Typography>
          <IconButton
            onClick={toggleSortOrder}
            aria-label="toggle sort order"
            sx={{
              height: '100%',
            }}
          >
            {sortOrder === 'asc' ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </Box>
        <Typography
          sx={{
            fontSize: FONT.fontSize.small,
            fontWeight: FONT.fontWeight.small,
            color: COLORS.text.dark,
          }}
        >
          {t('action')}
        </Typography>
      </Box>

      <Box mb={2}>
        {companies && companies.length > 0 ? (
          companies.map((company) => (
            <CompanyItem
              key={company.id}
              company={company}
              fetchCompanies={fetchCompanies}
              onNavigate={() => navigate(`/company-list/${company.id}`)}
            />
          ))
        ) : (
          <Typography>{t('noCompanies')}</Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination
          count={Math.ceil(total / 10)}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default CompanyListPage;
