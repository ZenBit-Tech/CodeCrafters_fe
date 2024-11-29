import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import Status from '@/components/Status';
import { StatusEnum } from '@/constants/status';
import mapPin from '@/assets/icons/map-pin.svg';
import noteIcon from '@/assets/icons/note.svg';
import deleteIcon from '@/assets/icons/delete.svg';
import { orderDetailsBlockStyles, orderRowActionsBlockStyles } from './styles';

interface OrderDetailsProps {
  city: string;
  startTime: string;
}

const OrderDetails: FC<OrderDetailsProps> = ({ city, startTime }) => {
  return (
    <Box sx={orderDetailsBlockStyles}>
      <Box>
        <Typography>{t(city)}</Typography>
        <Typography>{startTime}</Typography>
      </Box>
      <Status status={StatusEnum.COMPLETED} />
      <Box sx={orderRowActionsBlockStyles}>
        <img src={noteIcon} alt="noteIcon" />
        <img src={mapPin} alt="mapPin" />
        <img src={deleteIcon} alt="deleteIcon" />
      </Box>
    </Box>
  );
};

export default OrderDetails;
