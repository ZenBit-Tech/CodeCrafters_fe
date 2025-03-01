import React from 'react';
interface FilterHeaderProps {
    onFilterChange: (filters: {
        drivers: string[];
        stops: number[];
        statuses: string[];
    }) => void;
}
declare const FilterHeader: React.FC<FilterHeaderProps>;
export default FilterHeader;
