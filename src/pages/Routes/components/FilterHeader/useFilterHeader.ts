import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '@/store/store';
import { getRouteFilters } from '@/api/routesActions';

interface Filters {
  drivers: string[];
  stops: number[];
  statuses: string[];
}

const useFilterHeader = (onFilterChange: (filters: Filters) => void) => {
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([]);
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const [uniqueDrivers, setDrivers] = useState<string[]>([]);
  const [uniqueStops, setStops] = useState<number[]>([]);
  const [uniqueStatuses, setStatuses] = useState<string[]>([]);

  const { t } = useTranslation();
  const { startDate, endDate } = useSelector(
    (state: RootState) => state.routes
  );

  useEffect(() => {
    const loadFilters = async () => {
      const { drivers, stops, statuses } = await getRouteFilters(
        startDate,
        endDate
      );

      setDrivers(drivers);
      setStops(stops);
      setStatuses(statuses);
    };

    loadFilters();
  }, [startDate, endDate]);

  const handleDriverChange = (drivers: string[]) => {
    setSelectedDrivers(drivers);
    onFilterChange({
      drivers,
      stops: selectedStops,
      statuses: selectedStatuses,
    });
  };

  const handleStopsChange = (stops: number[]) => {
    setSelectedStops(stops);
    onFilterChange({
      drivers: selectedDrivers,
      stops,
      statuses: selectedStatuses,
    });
  };

  const handleStatusChange = (statuses: string[]) => {
    setSelectedStatuses(statuses);
    onFilterChange({
      drivers: selectedDrivers,
      stops: selectedStops,
      statuses,
    });
  };

  return {
    t,
    selectedDrivers,
    selectedStops,
    selectedStatuses,
    uniqueDrivers,
    uniqueStops,
    uniqueStatuses,
    handleDriverChange,
    handleStopsChange,
    handleStatusChange,
  };
};

export default useFilterHeader;
