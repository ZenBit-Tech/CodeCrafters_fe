import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/Button';
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

interface Company {
  id: number;
  name: string;
  email: string;
}

const CompanyListPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const companies: Company[] = [
    { id: 1, name: 'Company Alpha', email: 'alpha@company.com' },
    { id: 2, name: 'Company Beta', email: 'beta@company.com' },
    { id: 3, name: 'Company Gamma', email: 'gamma@company.com' },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const sortedAndFilteredCompanies = useMemo(() => {
    const filtered = companies.filter((company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1;
      if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [companies, searchTerm, sortOrder]);

  const handleEdit = (id: number) => {
    console.log(`Edit: ${id}`);
  };

  const handleNavigate = (id: number) => {
    console.log(`More: ${id}`);
  };

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
          placeholder={t('search.placeholder')}
          sx={{
            marginRight: 2,
            padding: 0,
            '& .MuiOutlinedInput-root': {
              height: '100%',
            },
            '& .MuiFormLabel-root': {
              transform: 'translate(14px, 8px) scale(1)',
            },
          }}
        />
        <Button variant="colored" label={t('button.addNewCompany')}></Button>
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
            onClick={() =>
              setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            }
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
        {sortedAndFilteredCompanies.map((company) => (
          <CompanyItem
            key={company.id}
            company={company}
            onEdit={handleEdit}
            onNavigate={handleNavigate}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination count={10} shape="rounded" color="primary" />
      </Box>
    </Box>
  );
};

export default CompanyListPage;
