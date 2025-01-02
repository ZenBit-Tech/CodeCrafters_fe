import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

import { TableHeader, ColumnHeader } from '@/pages/Routes/styles';
import { COLORS } from '@/constants/colors';
import { columns } from '@/constants/routes';

import { ColumnItem } from './styles';

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
          <ColumnItem variant="body2">
            {t(`routesPage.columns.${key}`)}
          </ColumnItem>
          {renderSortIcon(label)}
        </ColumnHeader>
      ))}
      <ColumnItem variant="body2">{t('routesPage.columns.status')}</ColumnItem>
      <ColumnItem variant="body2">{t('routesPage.actions')}</ColumnItem>
    </TableHeader>
  );
};

export default RouteTable;
