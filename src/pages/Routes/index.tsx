import React from 'react';
import { Divider } from '@mui/material';

import RoutesRow from '@/components/RoutesRow';
import { Container } from '@/pages/Routes/styles';
import ConditionalWrapper from '@/components/ConditionalWrapper';

import FilterHeader from './components/FilterHeader';
import ActionsPanel from './components/ActionsPanel';
import RouteTable from './components/RouteTable';
import RoutePagination from './components/Pagination';
import useRoutes from './useRoutes';
import NoRoutesMessage from './components/NoRoutesMessage';

const RoutesPage: React.FC = () => {
  const {
    routes,
    page,
    rowsPerPage,
    sortField,
    sortDirection,
    handleSort,
    handlePageChange,
    handleSearchChange,
    handleFilterChange,
    handleCreateRouteClick,
  } = useRoutes();

  return (
    <Container>
      <FilterHeader onFilterChange={handleFilterChange} />

      <Divider />

      <ActionsPanel onSearchChange={handleSearchChange} />

      <Divider />
      <ConditionalWrapper
        items={routes}
        emptyContent={
          <NoRoutesMessage onCreateRouteClick={handleCreateRouteClick} />
        }
      >
        <RouteTable
          sortField={sortField}
          sortDirection={sortDirection}
          onSort={handleSort}
        />

        <Divider />

        {routes
          .slice((page - 1) * rowsPerPage, page * rowsPerPage)
          .map((route) => (
            <RoutesRow
              key={route.routeId}
              routeId={route.routeId}
              date={route.date}
              driverFirstName={route.driverFirstName}
              driverLastName={route.driverLastName}
              driverPhone={route.driverPhone}
              stopsCount={route.stopsCount}
              route_time={route.routeTime}
              distance={route.distance}
              status={route.status}
              failedOrdersCount={route.failedOrdersCount}
            />
          ))}

        <RoutePagination
          page={page}
          totalPages={Math.ceil(routes.length / rowsPerPage)}
          start={(page - 1) * rowsPerPage + 1}
          end={Math.min(page * rowsPerPage, routes.length)}
          total={routes.length}
          onPageChange={handlePageChange}
        />
      </ConditionalWrapper>
    </Container>
  );
};

export default RoutesPage;
