import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, IconButton, Typography } from '@mui/material';
import { t } from 'i18next';
import { FC, useState } from 'react';

import DriverAvatar from '@/components/DriverAvatar';
import editIcon from '@/assets/icons/edit.svg';
import eyeIcon from '@/assets/icons/eye.svg';
import mapPin from '@/assets/icons/map-pin.svg';
import noteIcon from '@/assets/icons/note.svg';
import dropDownIcon from '@/assets/icons/drop-down-icon.svg';
import {
  routeDetailsHeaderStyles,
  routeDetailsHeaderClosedStyles,
  wrapper,
  orderRowStyles,
  routeHeaderIconsStyles,
} from './styles';
import { store } from '@/store/store';
import { toggleChooseRoute } from '@/store/slices/choseRouteSlice';

interface RouteDetailsInterface {
  driver_full_name: string;
  time_range: string;
  distance: number;
  route_id: number;
  orders: {
    time_range: string;
    city: string;
  }[];
}

const RouteDetails: FC<RouteDetailsInterface> = ({
  driver_full_name,
  time_range,
  distance,
  route_id,
  orders,
}) => {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <Box sx={wrapper}>
      <Box
        sx={open ? routeDetailsHeaderStyles : routeDetailsHeaderClosedStyles}
      >
        <DriverAvatar
          firstName={driver_full_name.split(' ')[0]}
          lastName={driver_full_name.split(' ')[1]}
        />
        <Box>
          {t(driver_full_name)}
          <Typography>
            {time_range} {t(`${orders.length} stops`)} {`${distance} km`}
          </Typography>
          <Typography>#{route_id}</Typography>
        </Box>
        <Box sx={routeHeaderIconsStyles}>
          <img src={editIcon} alt="editIcon" />
          <img
            src={eyeIcon}
            alt="eyeIcon"
            style={
              route_id === store.getState().choseRoute.value
                ? {
                    background: '#ccc',
                    borderRadius: '50%',
                    padding: '7px',
                    cursor: 'pointer',
                  }
                : { cursor: 'pointer' }
            }
            onClick={() => {
              if (route_id === store.getState().choseRoute.value) {
                store.dispatch(toggleChooseRoute(null));
              } else {
                store.dispatch(toggleChooseRoute(route_id));
              }
            }}
          />

          <IconButton
            onClick={() => setIsOpen(!open)}
            aria-label="toggle sort order"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Box>
      </Box>
      {open && (
        <Box>
          {orders.map((order) => (
            <Box key={order.time_range} sx={orderRowStyles}>
              <Typography>{order.time_range}</Typography>
              <Typography>{t(order.city)}</Typography>
              <Box>
                <img src={mapPin} alt="mapPin" />
                <img src={noteIcon} alt="noteIcon" />
                <img src={dropDownIcon} alt="dropDownIcon" />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default RouteDetails;
