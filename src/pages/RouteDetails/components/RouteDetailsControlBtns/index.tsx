import Button from '@/components/Button';

import arrowLeft from '@/assets/icons/arrow-left.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import { Box } from '@mui/material';
import { t } from 'i18next';

const RouteDetailsControlBtns = () => {
  return (
    <Box
      sx={{
        width: '1148px',
        marginTop: '36px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
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
