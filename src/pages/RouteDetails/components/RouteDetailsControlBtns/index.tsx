import { FC } from 'react';
import { t } from 'i18next';
import { Box } from '@mui/material';

import Button from '@/components/Button';
import arrowLeft from '@/assets/icons/arrow-left.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import { routeDetailsStyles } from './styles';

const RouteDetailsControlBtns: FC = () => {
  return (
    <Box sx={routeDetailsStyles}>
      <Button
        label={t('Previous step')}
        variant="outlined"
        startIcon={<img src={arrowLeft} alt="backBtn" />}
      />
      <Button
        label={t('Delete the route')}
        variant="colored"
        endIcon={<img src={arrowRight} alt="backBtn" />}
      />
    </Box>
  );
};

export default RouteDetailsControlBtns;
