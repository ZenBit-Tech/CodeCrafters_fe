import { Box, Typography } from '@mui/material';
import DriverBlock from './components/DriverBlock';
import OrderDetails from './components/OrderDetails';
import { FONT } from '@/constants/font';

const RouteInformBlock = () => {
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: '30px',
          paddingTop: '20px',
          fontSize: FONT.fontSize.extraLarge,
        }}
      >
        9 August, Tuesday
      </Typography>
      <Typography
        sx={{ marginBottom: '30px', fontSize: FONT.fontSize.extraLarge }}
      >
        #000000
      </Typography>
      <Typography sx={{ marginBottom: '30px', fontSize: FONT.fontSize.medium }}>
        Driver
      </Typography>
      <DriverBlock />
      <OrderDetails />
    </Box>
  );
};

export default RouteInformBlock;
