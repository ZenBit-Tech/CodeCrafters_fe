import React from 'react';
import { useTranslation } from 'react-i18next';

import { Pagination } from '@mui/material';
import {
  PaginationContainer,
  PaginationInfo,
  StyledPaginationItem,
  StyledPaginationButton,
} from '@/pages/components/AdminListTable/styles';

interface Props {
  page: number;
  totalPages: number;
  start: number;
  end: number;
  total: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const RoutePagination: React.FC<Props> = ({
  page,
  totalPages,
  start,
  end,
  total,
  onPageChange,
}) => {
  const { t } = useTranslation();

  return (
    <PaginationContainer>
      <PaginationInfo>
        {t('routesPage.pagination', { start, end, total })}
      </PaginationInfo>
      <Pagination
        count={totalPages}
        page={page}
        onChange={onPageChange}
        shape="rounded"
        renderItem={(item) => (
          <StyledPaginationItem
            {...item}
            slots={{
              previous: () => (
                <StyledPaginationButton>
                  {t('routesPage.previous')}
                </StyledPaginationButton>
              ),
              next: () => (
                <StyledPaginationButton>
                  {t('routesPage.next')}
                </StyledPaginationButton>
              ),
            }}
          />
        )}
      />
    </PaginationContainer>
  );
};

export default RoutePagination;
