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
declare const useFilterHeader: (onFilterChange: (filters: Filters) => void) => UseFilterHeaderReturn;
export default useFilterHeader;
