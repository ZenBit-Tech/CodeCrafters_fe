import React from 'react';
import { Typography } from '@mui/material';

import { Container, Count } from './styles';

interface CustomNavigationCountProps {
  count?: number;
}

const CustomNavigationCount: React.FC<CustomNavigationCountProps> = ({
  count,
}) => (
  <Container>
    {count !== undefined && count > 0 && (
      <Count>
        <Typography>{count}</Typography>
      </Count>
    )}
  </Container>
);

export default CustomNavigationCount;
