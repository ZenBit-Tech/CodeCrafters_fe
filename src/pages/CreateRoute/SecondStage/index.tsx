import { FC } from 'react';
import { Box, Pagination } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar, {
  CreateRouteStages,
} from '@/pages/components/CreateRouteProgressBar';
import SearchComponent from '@/components/SearchComponent';
import BasicDatePicker from '@/components/BasicDatePicker';
import OrderManagementCard from './components/OrderManagementCard';
import OrdersManagementSort from './components/OrdersManagementSort';
import { useOrdersPagination } from './useOrdersPagination';
import { useSearchOrders } from './useSearch';
import { useValidateChoosedOrders } from './useValidateChoosedOrders';
import { useChangeDate } from './useChangeDate';
import { paginationWrapper, searchRow } from './styles';
import EmptyOrdersComponent from '@/pages/components/EmptyOrdersComponent';
import dayjs from 'dayjs';

const SecondStagePage: FC = () => {
  const { sendRequestByParams } = useSearchOrders();
  const { viewOrdersData, currentPage, totalPages, fetchOrders } =
    useOrdersPagination();
  const { goToDriversStage } = useValidateChoosedOrders();

  const { handleDateChange, selectedDate } = useChangeDate();

  return (
    <Box>
      <CreateRouteProgressBar choseRoute={CreateRouteStages.SECOND} />

      <Box sx={searchRow}>
        <SearchComponent onSearch={sendRequestByParams} />
        <BasicDatePicker
          value={dayjs(selectedDate?.toISOString())}
          onChange={handleDateChange}
          dataFormat={''}
        />
      </Box>
      <OrdersManagementSort />
      {viewOrdersData.orders.length > 0 ? (
        viewOrdersData.orders.map((order) => (
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

      <CreateRouteButtons
        previousPath={'/date-management'}
        nextPath={'/drivers-management'}
        handleValidate={goToDriversStage}
      />
    </Box>
  );
};

export default SecondStagePage;
