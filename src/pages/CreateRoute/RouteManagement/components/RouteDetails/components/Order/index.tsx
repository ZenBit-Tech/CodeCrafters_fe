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
import { useToggleVisible } from '@/hooks/useToggleVisible';
import { InputField } from '@/components/CalendarRange/styles';
import arrowUpInCircle from '@/assets/icons/arrow-down-circle.svg';
import { useForm } from 'react-hook-form';
import axiosInstance from '@/utils/axiosInstance';
import { toast } from 'react-toastify';
import { store } from '@/store/store';
import { setisVisible } from '@/store/slices/loaderSlice';

const OrderRow: FC<{
  order: {
    id: number;
    time_range: string;
    city: string;
  };
  parentId: number;
}> = ({ order, parentId }) => {
  const { choosePin, choseCity } = useChooseMapPin();
  const [isCreateNote, setCreateNoteVisible] = useToggleVisible();

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

  const { register, getValues } = useForm<{ notification: string }>();

  const createNotificationForOrder = async () => {
    const { notification } = getValues();

    if (notification.length > 0) {
      store.dispatch(setisVisible(true));
      try {
        await axiosInstance.post(`/notifications/orders`, {
          notification,
          id: order.id,
        });

        toast.success('all good');
      } catch (error) {
        throw new Error(`${error}`);
      } finally {
        store.dispatch(setisVisible(false));
      }
    }
  };

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
      <Box sx={{ display: 'flex' }}>
        <img
          src={mapPin}
          style={choseCity === order.city ? iconActiveStyles : iconStyles}
          alt="mapPin"
          onClick={() => choosePin(order.city)}
        />
        <Box sx={{ position: 'relative' }}>
          <img
            src={noteIcon}
            alt="noteIcon"
            onClick={() => setCreateNoteVisible()}
          />
          {isCreateNote && (
            <Box
              sx={{
                position: 'absolute',
                width: '276px',
                height: '116px',
                border: '2px solid',
                borderColor: COLORS.purple,
                borderRadius: '10px',
                zIndex: 12,
                backgroundColor: COLORS.white,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <InputField
                sx={{
                  borderRadius: '10px',
                  padding: '14px',
                  cursor: 'text',
                }}
                {...register('notification')}
              />
              <Box
                sx={{
                  width: '100%',
                  borderTop: '2px solid',
                  height: '44px',
                  borderColor: COLORS.purple,
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <img
                  style={{ cursor: 'pointer' }}
                  src={arrowUpInCircle}
                  alt="arrowUpInCircle"
                  onClick={() => createNotificationForOrder()}
                />
              </Box>
            </Box>
          )}
        </Box>
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
