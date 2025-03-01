import React from 'react';
interface Props {
    page: number;
    totalPages: number;
    start: number;
    end: number;
    total: number;
    onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}
declare const RoutePagination: React.FC<Props>;
export default RoutePagination;
