import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { getRouteFilters } from '@/api/routesActions';
import { Filters } from '@/interfaces/Routes';

interface UseFilterHeaderReturn {
  selectedDrivers: string[];
  selectedStops: number[];
  selectedStatuses: string[];
  uniqueDrivers: string[];
  uniqueStops: number[];
  uniqueStatuses: string[];
  handleDriverChange: (drivers: string[]) => void;
  handleStopsChange: (stops: number[]) => void;
  handleStatusChange: (statuses: string[]) => void;
}

const useFilterHeader = (
  onFilterChange: (filters: Filters) => void
): UseFilterHeaderReturn => {
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([]);
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const [uniqueDrivers, setDrivers] = useState<string[]>([]);
  const [uniqueStops, setStops] = useState<number[]>([]);
  const [uniqueStatuses, setStatuses] = useState<string[]>([]);

  const { startDate, endDate } = useSelector(
    (state: RootState) => state.routes
  );

  useEffect(() => {
    const loadFilters = async (): Promise<void> => {
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

  const handleDriverChange = (drivers: string[]): void => {
    setSelectedDrivers(drivers);
    onFilterChange({
      drivers,
      stops: selectedStops,
      statuses: selectedStatuses,
    });
  };

  const handleStopsChange = (stops: number[]): void => {
    setSelectedStops(stops);
    onFilterChange({
      drivers: selectedDrivers,
      stops,
      statuses: selectedStatuses,
    });
  };

  const handleStatusChange = (statuses: string[]): void => {
    setSelectedStatuses(statuses);
    onFilterChange({
      drivers: selectedDrivers,
      stops: selectedStops,
      statuses,
    });
  };

  return {
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
