import React from 'react';
import { Box, Pagination } from '@mui/material';

import OrderItem from '@/pages/Orders/components/OrderItem/OrderItem';
import SortingRow from '@/pages/Orders/components/SortingRow/SortingRow';
import SearchComponent from '@/components/SearchComponent';
import { useOrdersPagination } from './useOrdersPagination';
import { paginationWrapper, searchRowContainer } from './styles';
import { useSearchOrders } from './useSearch';
import Button from '@/components/Button';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import EmptyOrdersComponent from '../components/EmptyOrdersComponent';

function OrdersPage(): React.ReactElement {
  const { sendRequestByParams } = useSearchOrders();
  const { viewOrdersData, currentPage, totalPages, fetchOrders } =
    useOrdersPagination();

  return (
    <div>
      <Box sx={searchRowContainer}>
        <SearchComponent onSearch={sendRequestByParams} />
        <Link to="/date-management">
          <Button
            label={t('Create Route')}
            variant={'outlined'}
            sx={{ width: '155px' }}
          />
        </Link>
      </Box>
      <SortingRow />
      {viewOrdersData.orders.length > 0 ? (
        viewOrdersData.orders.map((order) => (
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
        ))
      ) : (
        <EmptyOrdersComponent />
      )}
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
