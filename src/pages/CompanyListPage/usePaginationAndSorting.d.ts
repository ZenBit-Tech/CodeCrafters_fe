import React from 'react';
declare const usePaginationAndSorting: (initialSortOrder?: "asc" | "desc") => {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    sortOrder: "desc" | "asc";
    searchTerm: string;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handlePageChange: (_: React.ChangeEvent<unknown>, value: number) => void;
    toggleSortOrder: () => void;
};
export default usePaginationAndSorting;
