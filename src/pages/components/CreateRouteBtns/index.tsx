import { FC } from 'react';
import { Box } from '@mui/material';
import { t } from 'i18next';

import Button from '@/components/Button';
import arrowLeft from '@/assets/icons/arrow-left.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import { wrapper } from '@/pages/components/CreateRouteBtns/styles';

const CreateRouteButtons: FC = () => {
  return (
    <Box sx={wrapper}>
      <Button
        label={t('Back')}
        variant="outlined"
        startIcon={<img src={arrowLeft} alt="backBtn" />}
      />
      <Button
        label={t('Next step')}
        variant="colored"
        endIcon={<img src={arrowRight} alt="backBtn" />}
      />
    </Box>
  );
};

export default CreateRouteButtons;
