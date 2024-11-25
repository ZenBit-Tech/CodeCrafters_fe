import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, MenuItem } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

import { TableHeader, ColumnHeader, StyledSelect } from '@/pages/Routes/styles';
import { COLORS } from '@/constants/colors';
import { columns } from '@/constants/routes';
import { StatusEnum } from '@/constants/status';

interface Props {
  sortField: string | null;
  sortDirection: 'asc' | 'desc';
  statusFilter: string | null;
  onSort: (field: string) => void;
  onFilterChange: (status: string) => void;
}

const RouteTable: React.FC<Props> = ({
  sortField,
  sortDirection,
  statusFilter,
  onSort,
  onFilterChange,
}) => {
  const { t } = useTranslation();

  const renderSortIcon = (field: string): React.JSX.Element => {
    if (sortField === field) {
      return sortDirection === 'asc' ? (
        <ArrowUpward fontSize="small" />
      ) : (
        <ArrowDownward fontSize="small" />
      );
    }

    return <ArrowDownward fontSize="small" sx={{ color: COLORS.text.light }} />;
  };

  return (
    <TableHeader>
      {columns.map(({ key }) => (
        <ColumnHeader key={key} onClick={() => onSort(key)}>
          <Typography variant="body2" color={COLORS.text.medium}>
            {t(`routesPage.columns.${key}`)}
          </Typography>
          {renderSortIcon(key)}
        </ColumnHeader>
      ))}
      <StyledSelect
        value={statusFilter || ''}
        onChange={(e) => onFilterChange(e.target.value as string)}
        displayEmpty
        variant="standard"
        renderValue={(selected) =>
          selected ? (selected as string) : t('routesPage.allStatuses')
        }
      >
        <MenuItem value="">{t('routesPage.allStatuses')}</MenuItem>
        {Object.values(StatusEnum).map((status) => (
          <MenuItem key={status} value={status}>
            {t(`routesPage.status.${status}`)}
          </MenuItem>
        ))}
      </StyledSelect>
      <Typography variant="body2" color={COLORS.text.medium}>
        {t('routesPage.actions')}
      </Typography>
    </TableHeader>
  );
};

export default RouteTable;
