import React from 'react';
import { Typography } from '@mui/material';

import { Container, Count, Title } from './styles';

interface CustomNavigationCountProps {
  title: string;
  count?: number;
}

const CustomNavigationCount: React.FC<CustomNavigationCountProps> = ({
  title,
  count,
}) => (
  <Container>
    <Title>{title}</Title>
    {count !== undefined && count > 0 && (
      <Count>
        <Typography>{count}</Typography>
      </Count>
    )}
  </Container>
);

export default CustomNavigationCount;
