import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import { useDraggable } from '@dnd-kit/core';

import mapPin from '@/assets/icons/map-pin.svg';
import noteIcon from '@/assets/icons/note.svg';
import dropDownIcon from '@/assets/icons/drop-down-icon.svg';
import {
  iconActiveStyles,
  iconStyles,
  orderRowStyles,
} from '@/pages/CreateRoute/RouteManagement/components/RouteDetails/styles.ts';
import { useChooseMapPin } from '@/pages/CreateRoute/RouteManagement/components/RouteDetails/useChooseMapPin';
import { COLORS } from '@/constants/colors';

const OrderRow: FC<{
  order: {
    id: number;
    time_range: string;
    city: string;
  };
  parentId: number;
}> = ({ order, parentId }) => {
  const { choosePin, choseCity } = useChooseMapPin();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: order.id,
    data: { parentId, order },
  });

  const style = transform
    ? {
        background: COLORS.white,
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <Box
      key={order.time_range}
      sx={orderRowStyles}
      ref={setNodeRef}
      {...attributes}
      style={style}
    >
      <Typography>{order.time_range}</Typography>
      <Typography>{t(order.city)}</Typography>
      <Box>
        <img
          src={mapPin}
          style={choseCity === order.city ? iconActiveStyles : iconStyles}
          alt="mapPin"
          onClick={() => choosePin(order.city)}
        />
        <img src={noteIcon} alt="noteIcon" />
        <img
          src={dropDownIcon}
          alt="dropDownIcon"
          style={{ cursor: 'pointer' }}
          {...listeners}
        />
      </Box>
    </Box>
  );
};

export default OrderRow;
