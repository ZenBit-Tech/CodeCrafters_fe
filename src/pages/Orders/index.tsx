import React from 'react';
import { Box, Pagination } from '@mui/material';

import OrderItem from '@/pages/Orders/components/OrderItem/OrderItem';
import SortingRow from '@/pages/Orders/components/SortingRow/SortingRow';
import { useOrdersPagination } from './useOrdersPagination';
import SearchOrders from './components/SearchOrders';
import { paginationWrapper } from './styles';

function OrdersPage(): React.ReactElement {
  const { viewOrdersData, currentPage, totalPages, fetchOrders } =
    useOrdersPagination();

  return (
    <div>
      <SearchOrders />
      <SortingRow />
      {viewOrdersData.orders.map((order) => (
        <OrderItem
          key={order.id}
          id={order.id}
          collectionDate={order.collection_date}
          collectionAddress={order.collection_address}
          luggages={order.luggages}
          customer={order.customer}
          status={order.status}
          routeId={order.route}
          collectionTimeStart={order.collection_time_start}
          collectionTimeEnd={order.collection_time_end}
        />
      ))}
      <Box sx={paginationWrapper}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, value) => fetchOrders(value)}
          shape="rounded"
          color="primary"
        />
      </Box>
    </div>
  );
}

export default OrdersPage;
