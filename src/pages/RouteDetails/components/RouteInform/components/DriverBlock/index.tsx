import DriverAvatar from '@/components/DriverAvatar';
import { COLORS } from '@/constants/colors';
import { Box, Typography } from '@mui/material';

const DriverBlock = () => {
  return (
    <Box
      sx={{
        width: '344px',
        marginBottom: '15px',
        padding: '8px',
        border: `1px solid ${COLORS.gray}`,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <DriverAvatar firstName={'John'} lastName={'Doe'} />
      <Box sx={{ marginLeft: '15px' }}>
        <Typography>John Doe</Typography>
        <Box
          sx={{
            width: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography>09:00 - 18:00</Typography>
          <Typography>5 stops</Typography>
          <Typography>900 km</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DriverBlock;
