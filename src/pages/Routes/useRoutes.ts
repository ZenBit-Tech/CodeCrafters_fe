import { useEffect, useState } from 'react';
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
import { BackendRoute } from '@/interfaces/Routes';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date); // Example: 01 Nov 2024
};

const calculateRouteTime = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffMs = end.getTime() - start.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${diffHrs} : ${diffMins}0`;
};

const processFullName = (fullName: string) => {
  const [firstName, lastName] = fullName.split(' ');
  return { firstName, lastName };
};

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

      const transformedData = data.map((backendRoute: BackendRoute) => {
        const { firstName, lastName } = processFullName(
          backendRoute.user_id.full_name
        );

        return {
          routeId: backendRoute.id,
          date: formatDate(backendRoute.submission_date),
          driverFirstName: firstName,
          driverLastName: lastName,
          driverPhone: backendRoute.user_id.phone_number || 'N/A',
          stopsCount: backendRoute.distance,
          route_time: calculateRouteTime(
            backendRoute.submission_date,
            backendRoute.arrival_date
          ),
          distance: backendRoute.distance,
          status: backendRoute.status as StatusEnum,
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

  const handlePageChange = (_e: React.ChangeEvent<unknown>, value: number) => {
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
