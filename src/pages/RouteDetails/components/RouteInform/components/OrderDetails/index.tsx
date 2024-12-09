import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import Status from '@/components/Status';
import { StatusEnum } from '@/constants/status';
import mapPin from '@/assets/icons/map-pin.svg';
import noteIcon from '@/assets/icons/note.svg';
import deleteIcon from '@/assets/icons/delete.svg';
import { useRouteDetails } from '@/pages/RouteDetails';
import { useToggleVisible } from '@/hooks/useToggleVisible';
import PopupMessage from '@/components/PopupMessage';

import {
  mapPinActive,
  mapPinStyles,
  orderDetailsBlockStyles,
  orderRowActionsBlockStyles,
  removeOrderIconStyles,
} from './styles';

interface OrderDetailsProps {
  id: number;
  city: string;
  startTime: string;
  status: StatusEnum;
}

const OrderDetails: FC<OrderDetailsProps> = ({
  id,
  city,
  startTime,
  status,
}) => {
  const { getPinCoordinates: handleChoosePin, handleDelete } =
    useRouteDetails();
  const [isVisible, toggleIsVisible] = useToggleVisible(false);
  const [isRemoveOrder, toggleIsRemoveOrder] = useToggleVisible(false);

  return (
    <Box sx={orderDetailsBlockStyles}>
      <Box>
        <Typography>{t(city)}</Typography>
        <Typography>{startTime}</Typography>
      </Box>
      <Status status={status} />
      <Box sx={orderRowActionsBlockStyles}>
        <img src={noteIcon} alt="noteIcon" />
        <img
          src={mapPin}
          style={isVisible ? mapPinActive : mapPinStyles}
          alt="mapPin"
          onClick={() => {
            toggleIsVisible();
            handleChoosePin(city);
          }}
        />
        <img
          src={deleteIcon}
          alt="deleteIcon"
          style={removeOrderIconStyles}
          onClick={toggleIsRemoveOrder}
        />
      </Box>
      <PopupMessage
        open={isRemoveOrder}
        onClose={toggleIsRemoveOrder}
        onConfirm={() => {
          handleDelete(id);
          toggleIsRemoveOrder();
        }}
        heading={t(`This operation delete order #${id}`)}
        mainMessage={t('routeDetails.deleteRouteModal.mainMessage')}
        subMessage={t('routeDetails.deleteRouteModal.subMessage')}
        cancelText={t('routeDetails.deleteRouteModal.cancelText')}
        confirmText={t('routeDetails.deleteRouteModal.confirmText')}
      />
    </Box>
  );
};

export default OrderDetails;
