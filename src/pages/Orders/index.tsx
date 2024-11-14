import React from 'react';
import OrderItem from '@/pages/Orders/components/OrderItem/OrderItem';
import { LuggageTypes } from './components/OrderItem/types';
import SortingRow from '@/pages/Orders/components/SortingRow/SortingRow';
import { Box, Pagination } from '@mui/material';
import { StatusEnum } from '@/constants/status';

function OrdersPage(): React.ReactElement {
  return (
    <div>
      <SortingRow />
      <OrderItem
        collectionDate={new Date()}
        collectionAddress="456 Elm St, Los Angeles, CA"
        luggages={[
          { id: 1, luggage_weight: 3, luggage_type: LuggageTypes.SMALL },
        ]}
        customer={{
          fullName: 'Alishia Fillipina',
          phoneNumber: '+380123456789',
          email: 'alishia@gmail.com',
        }}
        status={StatusEnum.UPCOMING}
        routeId={null}
      />
      <OrderItem
        collectionDate={new Date()}
        collectionAddress="456 Elm St, Los Angeles, CA"
        luggages={[
          { id: 2, luggage_weight: 3, luggage_type: LuggageTypes.SMALL },
        ]}
        customer={{
          fullName: 'Alishia Fillipina',
          phoneNumber: '+380123456789',
          email: 'alishia@gmail.com',
        }}
        status={StatusEnum.NOT_ARRIVED}
        routeId={null}
      />
      <OrderItem
        collectionDate={new Date()}
        collectionAddress="456 Elm St, Los Angeles, CA"
        luggages={[
          { id: 3, luggage_weight: 3, luggage_type: LuggageTypes.SMALL },
        ]}
        customer={{
          fullName: 'Alishia Fillipina',
          phoneNumber: '+380123456789',
          email: 'alishia@gmail.com',
        }}
        status={StatusEnum.FAILED}
        routeId={3}
      />
      <OrderItem
        collectionDate={new Date()}
        collectionAddress="456 Elm St, Los Angeles, CA"
        luggages={[
          { id: 4, luggage_weight: 3, luggage_type: LuggageTypes.SMALL },
          { id: 5, luggage_weight: 20, luggage_type: LuggageTypes.BIG },
        ]}
        customer={{
          fullName: 'Alishia Fillipina',
          phoneNumber: '+380123456789',
          email: 'alishia@gmail.com',
        }}
        status={StatusEnum.COMPLETED}
        routeId={2}
      />
      <OrderItem
        collectionDate={new Date()}
        collectionAddress="456 Elm St, Los Angeles, CA"
        luggages={[
          { id: 6, luggage_weight: 3, luggage_type: LuggageTypes.SMALL },
        ]}
        customer={{
          fullName: 'Alishia Fillipina',
          phoneNumber: '+380123456789',
          email: 'alishia@gmail.com',
        }}
        status={StatusEnum.AT_RISK}
        routeId={12}
      />
      <Box
        sx={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Pagination
          count={Math.ceil(5)}
          page={1}
          onChange={() => {}}
          shape="rounded"
          color="primary"
        />
      </Box>
    </div>
  );
}

export default OrdersPage;
