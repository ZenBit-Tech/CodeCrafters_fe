import React from 'react';
import { Typography } from '@mui/material';

const NoRoutesMessage: React.FC = () => (
  <Typography variant="body1" align="center" sx={{ padding: 4 }}>
    No routes have been sent to drivers yet
  </Typography>
);

export default NoRoutesMessage;
