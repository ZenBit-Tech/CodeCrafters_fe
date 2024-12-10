import { FC, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, IconButton, Typography } from '@mui/material';
import { t } from 'i18next';

import UserAvatar from '@/components/UserAvatar';
import editIcon from '@/assets/icons/edit.svg';
import eyeIcon from '@/assets/icons/eye.svg';
import {
  routeDetailsHeaderStyles,
  routeDetailsHeaderClosedStyles,
  wrapper,
  routeHeaderIconsStyles,
  iconActiveStyles,
  iconStyles,
} from './styles';
import OrdersList from './components/OrdersList';
import { useChooseRoute } from './useChooseRoute';

export interface RouteDetailsInterface {
  driver_full_name: string;
  time_range: string;
  distance: number;
  route_id: number;
  orders: {
    id: number;
    time_range: string;
    city: string;
  }[];
}

export const RouteDetails: FC<RouteDetailsInterface> = ({
  driver_full_name,
  time_range,
  distance,
  route_id,
  orders,
}) => {
  const [open, setIsOpen] = useState<boolean>(false);
  const { choseRouteId, chooseRoute } = useChooseRoute();

  return (
    <Box sx={wrapper}>
      <Box
        sx={open ? routeDetailsHeaderStyles : routeDetailsHeaderClosedStyles}
      >
        <UserAvatar
          firstName={driver_full_name.split(' ')[0]}
          lastName={driver_full_name.split(' ')[1]}
        />
        <Box>
          {t(driver_full_name)}
          <Typography>
            {time_range} {t(`${orders.length} stops`)}{' '}
            {`${distance ? distance : 0} km`}
          </Typography>
          <Typography>#{route_id}</Typography>
        </Box>
        <Box sx={routeHeaderIconsStyles}>
          <img src={editIcon} alt="editIcon" />
          <img
            src={eyeIcon}
            alt="eyeIcon"
            style={route_id === choseRouteId ? iconActiveStyles : iconStyles}
            onClick={() => chooseRoute(route_id)}
          />

          <IconButton
            onClick={() => setIsOpen(!open)}
            aria-label="toggle sort order"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Box>
      </Box>
      {open && <OrdersList routeId={route_id} orders={orders} />}
    </Box>
  );
};
