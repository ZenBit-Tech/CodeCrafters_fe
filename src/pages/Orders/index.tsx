import React from 'react';
import OrderItem from '@/pages/Orders/components/OrderItem/OrderItem';
import SortingRow from '@/pages/Orders/components/SortingRow/SortingRow';
import { Box, Pagination } from '@mui/material';
import { useOrdersPagination } from './useOrdersPagination';
import SearchOrders from './components/SearchOrders';

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
      <Box
        sx={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => fetchOrders(value)}
          shape="rounded"
          color="primary"
        />
      </Box>
    </div>
  );
}

export default OrdersPage;
