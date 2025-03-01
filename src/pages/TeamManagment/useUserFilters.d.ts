import React, { ChangeEvent } from 'react';
type SortOrder = Record<string, 'asc' | 'desc'>;
interface UseUserFiltersReturn {
    page: number;
    searchTerm: string;
    filterByRole: string;
    sortOrder: SortOrder;
    handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleRoleFilterChange: (role: string) => void;
    toggleSortOrder: (key: string) => void;
    handlePageChange: (_: ChangeEvent<unknown>, value: number) => void;
    triggerSearch: () => void;
    pendingSearchTerm: string;
    handleKeyDown: (event: React.KeyboardEvent) => void;
}
declare const useUserFilters: () => UseUserFiltersReturn;
export default useUserFilters;
