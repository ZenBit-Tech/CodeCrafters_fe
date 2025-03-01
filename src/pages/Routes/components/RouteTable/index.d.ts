import React from 'react';
interface Props {
    sortField: string | null;
    sortDirection: 'asc' | 'desc';
    onSort: (field: string) => void;
}
declare const RouteTable: React.FC<Props>;
export default RouteTable;
