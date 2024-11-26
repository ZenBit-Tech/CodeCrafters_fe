import React from 'react';
import { Divider } from '@mui/material';

import RoutesRow from '@/components/RoutesRow';
import { Container } from '@/pages/Routes/styles';
import FilterHeader from './components/FilterHeader';
import ActionsPanel from './components/ActionsPanel';
import RouteTable from './components/RouteTable';
import RoutePagination from './components/Pagination';
import { useRoutes } from '@/pages/Routes/useRoutes';

const RoutesPage: React.FC = () => {
  const {
    page,
    totalPages,
    sortedData,
    startIndex,
    endIndex,
    totalRows,
    sortField,
    sortDirection,
    statusFilter,
    handleSort,
    setStatusFilter,
    handleChangePage,
  } = useRoutes();

  return (
    <Container>
      <FilterHeader />

      <Divider />

      <ActionsPanel />

      <Divider />

      <RouteTable
        sortField={sortField}
        sortDirection={sortDirection}
        statusFilter={statusFilter}
        onSort={handleSort}
        onFilterChange={setStatusFilter}
      />

      <Divider />

      {sortedData.slice(startIndex, endIndex).map((route) => (
        <RoutesRow key={route.routeId} {...route} />
      ))}

      <RoutePagination
        page={page}
        totalPages={totalPages}
        start={startIndex + 1}
        end={endIndex}
        total={totalRows}
        onPageChange={handleChangePage}
      />
    </Container>
  );
};

export default RoutesPage;
