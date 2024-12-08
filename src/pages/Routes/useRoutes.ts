import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRoutesByDateRange } from '@/api/routesActions';
import {
  setPage,
  setRoutes,
  setSortDirection,
  setSortField,
  setStartDate,
  setEndDate,
} from '@/store/slices/routesSlice';
import { RootState } from '@/store/store';
import { StatusEnum } from '@/constants/status';
import { RouteData } from '@/interfaces/Routes';
import { processFullName } from '@/utils/processFullName';
import { formatDate } from '@/utils/formatDate';
import { calculateRouteTime } from '@/utils/calculateRouteTime';

const useRoutes = () => {
  const [filters, setFilters] = useState<{
    drivers: string[];
    stops: number[];
    statuses: string[];
  }>({
    drivers: [],
    stops: [],
    statuses: [],
  });
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();
  const {
    routes,
    page,
    sortField,
    sortDirection,
    rowsPerPage,
    startDate,
    endDate,
  } = useSelector((state: RootState) => state.routes);

  useEffect(() => {
    const fetchRoutes = async () => {
      const data = await getRoutesByDateRange(
        startDate,
        endDate,
        sortField,
        sortDirection,
        searchQuery,
        filters.drivers,
        filters.stops,
        filters.statuses
      );

      const transformedData = data.map((routeData: RouteData) => {
        const { firstName, lastName } = processFullName(
          routeData.user_full_name
        );

        return {
          routeId: routeData.route_id,
          date: formatDate(routeData.route_submission_date),
          driverFirstName: firstName,
          driverLastName: lastName,
          driverPhone: routeData.user_phone_number || 'N/A',
          stopsCount: parseInt(routeData.ordersCount, 10),
          routeTime: calculateRouteTime(
            routeData.route_submission_date,
            routeData.route_arrival_date
          ),
          distance: routeData.route_distance,
          status: routeData.route_status as StatusEnum,
        };
      });

      dispatch(setRoutes(transformedData));
    };

    fetchRoutes();
  }, [
    startDate,
    endDate,
    sortField,
    sortDirection,
    searchQuery,
    filters,
    dispatch,
  ]);

  const handleSort = (field: string): void => {
    if (sortField === field) {
      dispatch(setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc'));
    } else {
      dispatch(setSortField(field));
      dispatch(setSortDirection('asc'));
    }
  };

  const handlePageChange = (_e: ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  const handleDateChange = (start: string, end: string) => {
    dispatch(setStartDate(start));
    dispatch(setEndDate(end));
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: {
    drivers: string[];
    stops: number[];
    statuses: string[];
  }) => {
    setFilters(newFilters);
  };

  return {
    routes,
    page,
    rowsPerPage,
    sortField,
    sortDirection,
    handleSort,
    handlePageChange,
    handleDateChange,
    handleSearchChange,
    handleFilterChange,
    filters,
    startDate,
    endDate,
  };
};

export default useRoutes;
