import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

import { TableHeader, ColumnHeader } from '@/pages/Routes/styles';
import { COLORS } from '@/constants/colors';
import { columns } from '@/constants/routes';

interface Props {
  sortField: string | null;
  sortDirection: 'asc' | 'desc';
  onSort: (field: string) => void;
}

const RouteTable: React.FC<Props> = ({ sortField, sortDirection, onSort }) => {
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
      {columns.map(({ label, key }) => (
        <ColumnHeader key={key} onClick={() => onSort(label)}>
          <Typography variant="body2">
            {t(`routesPage.columns.${key}`)}
          </Typography>
          {renderSortIcon(label)}
        </ColumnHeader>
      ))}
      <Typography variant="body2">{t('routesPage.columns.status')}</Typography>
      <Typography variant="body2">{t('routesPage.actions')}</Typography>
    </TableHeader>
  );
};

export default RouteTable;
