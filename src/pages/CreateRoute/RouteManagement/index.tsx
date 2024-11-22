import { FC } from 'react';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import RouteDetails from './components/RouteDetails';
import Map from './components/Map';

const RouteManagementPage: FC = () => {
  const locations = [
    'Kyiv, Khreshchatyk Street',
    'Lviv, Svobody Avenue',
    'Odessa, Deribasivska Street',
    'Dnipro, Yavornytskoho Avenue',
  ];

  return (
    <Box>
      <CreateRouteProgressBar />
      <Box
        sx={{
          width: '1126px',
          paddingLeft: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: COLORS.white,
        }}
      >
        <Box sx={{ paddingTop: '20px' }}>
          <Typography
            sx={{ fontSize: FONT.fontSize.extraLarge, marginBottom: '16px' }}
          >
            {t('9 August, Tuesday')}
          </Typography>
          <RouteDetails
            driver_full_name={'John Doe'}
            time_range={'19:00 - 20:00'}
            distance={900}
            route_id={1}
            orders={[
              { time_range: '19:20 - 19:30', city: 'Berlin' },
              { time_range: '19:20 - 19:30', city: 'Berlin' },
              { time_range: '19:20 - 19:30', city: 'Berlin' },
              { time_range: '19:20 - 19:30', city: 'Berlin' },
            ]}
          />
        </Box>
        <Map locations={locations} />
      </Box>
      <CreateRouteButtons />
    </Box>
  );
};

export default RouteManagementPage;
