import React from 'react';
import { Box, Typography } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

import CustomCheckbox from '../Checkbox';
import UserAvatar from '../UserAvatar';

interface OrderRowProps {
  date: string;
  time: string;
  address: string;
  luggageSize: string[];
  driverFirstName: string;
  driverLastName: string;
  driverPhone: string;
}

const OrderRow: React.FC<OrderRowProps> = ({
  date,
  time,
  address,
  luggageSize,
  driverFirstName,
  driverLastName,
  driverPhone,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
      gap={2}
      borderBottom={`1px solid ${COLORS.text.border}`}
    >
      <CustomCheckbox id={0} isChecked={false} toggleCheckbox={() => {}} />

      <Typography
        variant="body2"
        color={COLORS.text.medium}
        sx={{ minWidth: '100px', textAlign: 'left' }}
      >
        {date}
      </Typography>

      <Typography
        variant="body2"
        color={COLORS.text.medium}
        sx={{ minWidth: '100px', textAlign: 'left' }}
      >
        {time}
      </Typography>

      <Typography
        variant="body2"
        color={COLORS.text.medium}
        sx={{ minWidth: '200px', textAlign: 'left' }}
      >
        {address}
      </Typography>

      <Box sx={{ minWidth: '100px', textAlign: 'left' }}>
        {luggageSize.map((size, index) => (
          <Typography key={index} variant="body2" color={COLORS.text.medium}>
            {size}
          </Typography>
        ))}
      </Box>

      <Box display="flex" alignItems="center" sx={{ minWidth: '150px' }}>
        <UserAvatar firstName={driverFirstName} lastName={driverLastName} />
        <Box ml={1}>
          <Typography
            variant="body2"
            color={COLORS.text.medium}
            fontWeight={FONT.fontWeight.large}
          >{`${driverFirstName} ${driverLastName}`}</Typography>
          <Typography variant="body2" color={COLORS.text.light}>
            {driverPhone}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderRow;
