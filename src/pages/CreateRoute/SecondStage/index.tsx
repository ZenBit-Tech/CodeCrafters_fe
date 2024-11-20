import { useOrdersPagination } from '@/pages/Orders/useOrdersPagination';
import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import { Box, Pagination } from '@mui/material';
import { paginationWrapper } from './styles';
import OrderManagementCard from './components/OrderManagementCard';
import OrdersManagementSearch from './components/OrdersManagementSearch/index';
import OrdersManagementSort from './components/OrdersManagementSort';

const SecondStagePage = () => {
  const { viewOrdersData, currentPage, totalPages, fetchOrders } =
    useOrdersPagination();

  return (
    <Box>
      <CreateRouteProgressBar />

      <OrdersManagementSearch />
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

      <CreateRouteButtons />
    </Box>
  );
};

export default SecondStagePage;
