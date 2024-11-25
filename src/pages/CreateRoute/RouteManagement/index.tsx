import { FC } from 'react';
import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import Map from './components/Map';
import InformBlock from './components/InformBlock';
import { mapBlockStyles } from './styles';

const locations = [
  'Kyiv, Khreshchatyk Street',
  'Lviv, Svobody Avenue',
  'Odessa, Deribasivska Street',
  'Dnipro, Yavornytskoho Avenue',
];

const RouteManagementPage: FC = () => {
  return (
    <Box>
      <CreateRouteProgressBar />
      <Box sx={mapBlockStyles}>
        <InformBlock
          title={'9 August, Tuesday'}
          // TODO replace with real data
          routes={[
            {
              driver_full_name: 'John Doe',
              time_range: '19:00 - 20:00',
              distance: 900,
              id: 1,
              orders: [
                { time_range: '19:20 - 19:30', city: 'Berlin' },
                { time_range: '19:20 - 19:30', city: 'Berlin' },
                { time_range: '19:20 - 19:30', city: 'Berlin' },
                { time_range: '19:20 - 19:30', city: 'Berlin' },
              ],
            },
          ]}
        />
        <Map locations={locations} />
      </Box>
      <CreateRouteButtons />
    </Box>
  );
};

export default RouteManagementPage;
