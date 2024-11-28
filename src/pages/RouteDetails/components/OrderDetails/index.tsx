import { Box, Typography } from '@mui/material';

import Status from '@/components/Status';
import { StatusEnum } from '@/constants/status';
import mapPin from '@/assets/icons/map-pin.svg';
import noteIcon from '@/assets/icons/note.svg';
import deleteIcon from '@/assets/icons/delete.svg';

const OrderDetails = () => {
  return (
    <Box
      sx={{
        width: '352px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography>New York</Typography>
        <Typography>11:25</Typography>
      </Box>
      <Status status={StatusEnum.COMPLETED} />
      <Box
        sx={{
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img src={noteIcon} alt="noteIcon" />
        <img src={mapPin} alt="mapPin" />
        <img src={deleteIcon} alt="deleteIcon" />
      </Box>
    </Box>
  );
};

export default OrderDetails;
