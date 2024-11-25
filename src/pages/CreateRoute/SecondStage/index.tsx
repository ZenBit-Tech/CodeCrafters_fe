import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import { Box, Pagination } from '@mui/material';

import SearchComponent from '@/components/SearchComponent';
import { paginationWrapper } from './styles';
import OrderManagementCard from './components/OrderManagementCard';
import OrdersManagementSort from './components/OrdersManagementSort';
import { useOrdersPagination } from './useOrdersPagination';
import { useSearchOrders } from './useSearch';

const SecondStagePage = () => {
  const { sendRequestByParams } = useSearchOrders();
  const { viewOrdersData, currentPage, totalPages, fetchOrders } =
    useOrdersPagination();

  return (
    <Box>
      <CreateRouteProgressBar />

      <SearchComponent onSearch={sendRequestByParams} />
      <OrdersManagementSort />
      {viewOrdersData.orders.map((order) => (
        <OrderManagementCard
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

      <CreateRouteButtons
        previousPath={'/date-management'}
        nextPath={'/drivers-management'}
      />
    </Box>
  );
};

export default SecondStagePage;
